# Infobox — PHP / WordPress Compatibility Report

- **Plugin:** Infobox (`infobox`) — WPDeveloper
- **Version:** 1.2.6 → **1.3.0**
- **Branch:** `infobox-dev` (branched from `latest`, uncommitted)
- **Date of pass:** 2026-08-09

---

## 1. Detected original baseline

Header values are claims; these are what the **code** actually proves.

### PHP floor: **5.6**

| Evidence | File | Implies |
|---|---|---|
| `public static function get_instance( ...$args )` — variadic parameter | `includes/font-loader.php:22` | PHP 5.6+ |
| `new static( ...$args )` — argument unpacking | `includes/font-loader.php:24` | PHP 5.6+ |
| `[ ... ]` short array syntax throughout | all files | PHP 5.4+ |
| Closure passed as `render_callback` | `infobox.php:128` | PHP 5.3+ |
| No return types, no `??`, no `<=>`, no typed properties, no arrow fns | — | below PHP 7.0 |
| Changelog entry *"Fixed: PHP 5.6 compatibility issue"* (1.1.3) | `readme.txt` | intent was 5.6 |

**Original PHP floor = 5.6.** No `Requires PHP` header existed, so WordPress applied no gate at all.

### WP floor: **5.6**

| Evidence | File | Implies |
|---|---|---|
| `register_block_type( __DIR__, $args )` path form, gated behind a WP check | `infobox.php:124` | 5.8+ when taken |
| Explicit fallback to the block-**name** form when WP ≤ 5.6 | `includes/helpers.php:89` | author deliberately supported 5.6 |
| `block.json` present with `"apiVersion": 2` | `block.json` | apiVersion 2 landed in WP 5.6 |
| `WP_Block_Type_Registry::get_instance()` | `infobox.php:122` | 5.0+ |
| `render_block` filter | `includes/font-loader.php:31` | 5.0+ |
| `site-editor.php` screen handling | `includes/helpers.php:42` | 5.9+ when taken |

**Original WP floor = 5.6**, matching `readme.txt`.

### Declared vs. real (before this pass)

| Field | Plugin header | readme.txt | Real |
|---|---|---|---|
| Requires PHP | *(absent)* | *(absent)* | 5.6 |
| Requires at least | *(absent)* | 5.6 | 5.6 |
| Tested up to | *(absent)* | 6.5 | — |
| Stable tag | — | 1.2.6 | 1.2.6 ✓ |

They disagreed: the plugin header carried **none** of the three compatibility fields.

---

## 2. Target range

Live version check run **2026-08-09**:

- `https://www.php.net/releases/index.php?json&max=3` → **PHP 8.5.9** current; supported branches `8.2, 8.3, 8.4, 8.5`
- `https://api.wordpress.org/core/version-check/1.7/` → **WordPress 7.0.3** current (core itself requires PHP 7.4)

The floor is `max( detected original, policy minimum )`. Detected original is PHP 5.6 / WP 5.6 (§1); the policy minimum is **PHP 7.4 / WP 6.0**. The policy minimum is higher on both axes, so it wins.

**Target range: PHP 7.4 → 8.5, WordPress 6.0 → 7.0 — inclusive, every version in between.**

Per-version checklist covered: PHP 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5 · WP 6.0–6.9, 7.0.

The audit was originally carried out against the wider PHP 5.6 / WP 5.6 range before the floor was raised, so everything below is a superset of what the declared range strictly requires. Findings that only ever mattered below the new floor are marked as such rather than deleted — they are still the reason several fixes look the way they do.

---

## 3. Issues found

| # | File:line (pre-fix) | Issue | Breaks on | Severity |
|---|---|---|---|---|
| 1 | `infobox.php:31` | `require_once __DIR__ . '/lib/style-handler/style-handler.php'` — unguarded require of an **empty git submodule**. `lib/style-handler/` is an empty directory; `git submodule status` shows `-34fb2c61…` (uninitialised). Fatal on every page load. | **Every** PHP + WP version, whenever the submodule is not checked out | **Critical** |
| 2 | `includes/helpers.php:42` | `str_contains()` — PHP 8.0+ only. Reached on the `themes.php?…gutenberg-edit-site` admin screen. `Fatal error: Call to undefined function str_contains()` | PHP 5.6 – 7.4 | **Critical** |
| 3 | `infobox.php:37` | `throw new Error(...)` — the `Error` class does not exist before PHP 7, so the missing-build path fatals with *Class 'Error' not found*. And on PHP 7+ an uncaught throw from an `init` callback white-screens the entire site rather than degrading. | PHP 5.6 (fatal); PHP 7.0–8.5 (WSOD) | **High** |
| 4 | `includes/helpers.php:91` | `(float) get_bloginfo('version') <= 5.6` — float cast of a version string. `(float) '7.10'` is `7.1`, so any future x.10 release sorts below x.9. | Latent — any future WP x.10 | **High** |
| 5 | `includes/helpers.php:55` | `'eb_wp_version' => (float) get_bloginfo('version')` — same float cast, passed to JS. A WP `7.10` reaches the editor as `7.1`. | Latent — any future WP x.10 | **High** — *not auto-fixed, see §5* |
| 6 | `infobox.php:1` | No `if ( ! defined( 'ABSPATH' ) ) exit;` guard on the main plugin file (the include files have it). | All versions — direct file access | **Medium** |
| 7 | `infobox.php` header | `Requires PHP`, `Requires at least`, `Tested up to` all absent, so WordPress cannot gate installation or warn on incompatible hosts. | All versions | **Medium** |
| 8 | `includes/helpers.php:44` | `require INFOBOX_ADMIN_PATH . '/dist/modules.asset.php'` — unguarded require of a build artefact. Fatal in the admin if `dist/` is missing. | All versions | **Medium** |
| 9 | `includes/helpers.php:42` | `$_SERVER['QUERY_STRING']` read without `wp_unslash()` / `sanitize_text_field()`. | All versions (WPCS violation; low exploitability — comparison only) | **Medium** |
| 10 | `includes/font-loader.php:67` | `$googleFontFamily[$attributes[$key]] = $attributes[$key];` — uses an attribute value as an array key with no type check. A `*FontFamily` attribute holding an array/object throws `TypeError: Illegal offset type`; holding `null` triggers the PHP 8.1 `trim(null)` deprecation downstream. | PHP 8.0+ (fatal), PHP 8.1+ (deprecation) | **Medium** |
| 11 | `includes/font-loader.php:52` | `$block['blockName']` read without `isset()`. Third-party `render_block` filters can hand over an array without that key → *Undefined array key* warning. | PHP 8.0+ | **Low** |
| 12 | `includes/post-meta.php:11` | `add_filter('init', …)` used to register an action. Functionally identical in core, but semantically wrong and confuses static analysis. | None (correctness only) | **Low** |
| 13 | `includes/font-loader.php:24` | `if ( self::$instances == null )` — loose comparison on an object. | None today | **Low** |
| 14 | `includes/font-loader.php:15` | `private static $block_name = [];` declared as an array, always assigned a string. | None today | **Low** |
| 15 | `assets/js/eb-animation-load.js:29` | `DOMNodeInserted` — a Mutation Event, **removed from Chrome 127 (2024)** and Edge; deprecated in Firefox/Safari. The admin-side "re-run animation on style change" listener silently never fires on current browsers. | Chrome/Edge 127+ | **Medium** — *not auto-fixed, see §5* |
| 16 | `block.json` | `"apiVersion": 2`. WP 6.3 introduced apiVersion 3 (iframed editor canvas). v2 is still supported, but blocks stay in the compatibility path. | None (still supported) | **Low** — *not auto-fixed, see §5* |
| 17 | `includes/font-loader.php:97` | `wp_register_style( $handle_name, …, [] )` — no `$ver`, so WP appends its own core version to the Google Fonts URL. | None | **Low** — left as-is (changing it alters emitted HTML) |

**Scans that came back clean:** no `mysql_*`, `create_function()`, `each()`, `ereg*`, `split()`, `money_format()`, `strftime()`, `utf8_encode/decode`, `FILTER_SANITIZE_STRING`, `${var}` interpolation, curly-brace offsets, implicit nullable params (PHP 8.4), dynamic property creation on undeclared properties (PHP 8.2), or `#[\ReturnTypeWillChange]` needs. No `$wpdb` usage at all, so no `prepare()` exposure. No REST routes, so no missing `permission_callback`. No jQuery anywhere in `assets/` or `src/` — nothing to audit for jQuery 3.x / Migrate removals. Text domain is never loaded manually, so the WP 6.7 "too early" notice does not apply.

---

## 4. Fixes applied

Mapped 1:1 to the table above.

| # | Fix |
|---|---|
| 1 | `require_once` of `lib/style-handler/style-handler.php` wrapped in `file_exists()`. Uninitialised submodule now degrades silently instead of fataling. |
| 2 | `str_contains( $q, 'gutenberg-edit-site' )` → `strpos( $q, 'gutenberg-edit-site' ) !== false`. Identical semantics for a non-empty needle, works PHP 5.6 → 8.5. |
| 3 | `throw new Error(...)` → early `return`. Removes the PHP 5.6 fatal and the site-wide WSOD; a missing build now just skips registration. A defensive `is_array()` / `isset()` check on the returned asset array was added alongside. |
| 4 | `(float) get_bloginfo('version') <= 5.6` → first replaced with `version_compare( …, '5.7', '<' )`, then removed outright when the floor moved to WP 6.0. `get_block_register_path()` now simply returns the path; the parameter list is unchanged so the call site in `infobox.php` still works. |
| 6 | `if ( ! defined( 'ABSPATH' ) ) { exit; }` added to `infobox.php`. |
| 7 | Header now declares `Requires at least: 6.0`, `Tested up to: 7.0`, `Requires PHP: 7.4`. `readme.txt` gained `Requires PHP: 7.4`, `Requires at least` moved 5.6 → 6.0, and `Tested up to` moved 6.5 → 7.0. |
| 8 | `dist/modules.asset.php` require guarded with `file_exists()` plus a shape check; returns early instead of fataling. |
| 9 | `$_SERVER['QUERY_STRING']` now read through `sanitize_text_field( wp_unslash( … ) )` behind an `isset()`. |
| 10 | `get_fonts_family()` now skips any attribute value that is unset, non-string, or empty before using it as an array key. |
| 11 | `$block['blockName']` read through an `isset()` ternary. |
| 12 | `add_filter('init', …)` → `add_action('init', …)`. |
| 13 | `self::$instances == null` → `null === self::$instances`. |
| 14 | `private static $block_name = [];` → `= '';`. |
| — | `create_block_infobox_block_init()` wrapped in `if ( ! function_exists( … ) ):` / `endif;` to remove the fatal-redeclare risk from an unprefixed global function name. |
| — | Version bumped **1.2.6 → 1.3.0** (minor, chosen by the maintainer) and kept in sync across `infobox.php` header, `INFOBOX_VERSION`, `readme.txt` `Stable tag`, and `package.json`. Changelog entry added. |

**No feature, UI, markup, option name, hook name, block attribute, or saved-data change.** `dist/` was not rebuilt; `src/` was not touched.

---

## 5. Flagged — awaiting your decision (not auto-fixed)

### 5.1 `eb_wp_version` localized as a float — issue #5

```php
wp_localize_script('infobox-controls-util', 'EssentialBlocksLocalize', array(
    'eb_wp_version' => (float) get_bloginfo('version'),   // '7.10' → 7.1
```

This value crosses into JavaScript, and the only consumer lives in the **`controls` submodule — which is empty in this checkout**, so its comparison logic could not be read. Any correct fix changes the value's type or its value, which would change editor behaviour.

**Recommendation:** send both, keeping the existing key byte-identical so nothing breaks:

```php
'eb_wp_version'     => (float) get_bloginfo('version'),  // unchanged, legacy
'eb_wp_version_str' => get_bloginfo('version'),          // new, for version_compare in JS
```

…then migrate the `controls` consumers to the string form. **Needs your call**, and needs the `controls` submodule initialised to do safely.

### 5.2 `DOMNodeInserted` in the animation loader — issue #15

`assets/js/eb-animation-load.js:29` uses `DOMNodeInserted`, removed from Chrome 127. The block's front-end animation still works — only the **editor-side** "re-apply animation when the style dropdown changes" listener is dead. `waitForElement()` in the same file already uses `MutationObserver`, so the replacement pattern is present.

**Recommendation:** swap to `MutationObserver`. Not applied because it *restores* behaviour that is currently broken on modern Chrome — a visible change, and your call whether it belongs in a compatibility patch.

### 5.3 `block.json` apiVersion 2 → 3 — issue #16

apiVersion 2 is still fully supported, so this is not a break. Moving to 3 opts the block into the iframed editor canvas (WP 6.3+) and would need the editor styles re-verified inside the iframe.

**Recommendation:** leave at 2 for this patch release; schedule as its own change.

### 5.4 Raising the declared floor — ✅ RESOLVED

Originally flagged: the code genuinely supported PHP 5.6, but WordPress 7.0 itself requires PHP 7.4, so a 5.6 declaration gated nothing useful. Raising it blocks installation for a segment of users, which is a product decision rather than a compatibility one.

**Decision taken:** floor raised to **PHP 7.4 / WP 6.0**, matching the policy minimum. Applied to the plugin header and `readme.txt`, with a `Changed:` changelog line so the requirement bump is visible to existing users on update.

Knock-on change: `Infobox_Helper::get_block_register_path()` existed solely to return the block-**name** form on WP < 5.7. At a 6.0 floor that branch is unreachable, so the body was reduced to `return $blockPath;`. The signature and both parameters were kept so the call site in `infobox.php` is untouched.

The PHP 5.6-era fixes were **not** reverted, and none of them were wasted — issue #2 (`str_contains()`) still needs `strpos()`, because `str_contains()` is PHP 8.0+ and the floor is 7.4; issue #3 (`throw new Error`) was fixing a site-wide WSOD on PHP 7.0–8.5, not just a 5.6 fatal.

---

## 5b. Packaging — `.distignore` rewritten

Not a PHP/WP compatibility item, but part of this branch.

Two patterns in the old file did not do what they looked like they did under `wp dist-archive`, which turns each line into a `zip --exclude */<line>` argument:

- **`/controls/`** — the leading slash made it `*//controls/*` (double slash), which matches nothing. The `controls` submodule source was shipping in every local zip. Fixed to `controls`.
- **`dist/**/*.*`** — `**/*.*` requires at least one subdirectory, and `dist/` is flat, so this matched nothing under either `zip` or the CI rsync. Harmless as written, but dangerously misleading: "correcting" it to `dist` would ship a plugin with no JavaScript. Removed, and replaced with an explicit KEEP list in the file header.

Also newly excluded: `config/` (build-time only — `config/entries.js` imports from `../controls/src/…`, and no PHP references it), the full Babel config family, Prettier/Stylelint configs, `*.map`, and `compatibility-report.md`.

Verified by building a zip both ways and diffing the file lists. Removed: `config/` (3 files), `controls/`, all six `*.map` files, `compatibility-report.md`. **Nothing added, and no runtime file lost** — `infobox.php`, `readme.txt`, `block.json`, `includes/`, `assets/`, `lib/`, and `dist/*.js|*.css|*.asset.php` all still ship. Zip size 2.8 MB → 2.2 MB.

### Second pass — webfonts

`assets/fonts/` was 4.04 MB of a 5.38 MB uncompressed payload (75%). Two separate problems, both found by grepping every `url()` in the shipped CSS:

- **Orphaned FontAwesome 4 files — ~1.08 MB.** `fontawesome-webfont.{svg,eot,ttf,woff,woff2}` and `FontAwesome.otf` are referenced by **nothing**. The plugin ships `font-awesome5.css`, which points only at `fa-solid` / `fa-regular` / `fa-brands`. Pure leftovers from an FA4-era version.
- **Dead formats on the FA5 faces — ~2.19 MB.** `.svg` fonts (dropped by Chrome 38 in 2014, never supported by Firefox/IE/Edge) and `.eot` (IE-only; IE end-of-life June 2022). Both sit last in the `@font-face` `src:` list, so any browser supporting woff2/woff/ttf never requests them.

Kept: `.woff2` (modern), `.woff` (IE9+/Safari 5.1+), `.ttf` (old Android), and the **complete** `fontIconPicker.{svg,ttf,woff}` set — that face ships no woff2, so its `.svg` and `.ttf` are its only fallbacks. Exclusions are per-file, never a blanket `*.svg`/`*.eot`, precisely to avoid killing it.

Zip: **2.2 MB → 880 KB.**

**Build gotcha found while verifying:** `wp dist-archive` shells out to `zip -r`, which *updates* an existing archive instead of replacing it. Re-running after tightening `.distignore` left all seven newly excluded files in place and the size unchanged at 2.2 MB. The old zip must be deleted first. Noted in the `.distignore` header so the next person doesn't lose time to it.

---

## 6. Old-vs-new conflicts

**None.** Every fix is range-safe across the declared PHP 7.4 → 8.5 and WP 6.0 → 7.0 span, and in fact remains safe across the wider PHP 5.6 / WP 5.6 range the audit was originally run against:

- `strpos()` covers what `str_contains()` did, on every PHP version.
- `file_exists()` guards work identically everywhere.
- The float-cast version comparison is gone entirely rather than reconciled — at a WP 6.0 floor the branch it guarded is unreachable.

The one genuine tension was §5.4, the declared floor sitting below what current WordPress itself requires. That is now **resolved** by raising it to PHP 7.4 / WP 6.0.

---

## 7. Final declared compatibility

| Field | `infobox.php` | `readme.txt` |
|---|---|---|
| Requires PHP | 7.4 | 7.4 |
| Requires at least | 6.0 | 6.0 |
| Tested up to | 7.0 | 7.0 |
| Version / Stable tag | 1.3.0 | 1.3.0 |

`package.json` `version` and `INFOBOX_VERSION` also at `1.3.0`.

---

## 8. Verification performed

**Syntax — full sweep, all clean:**

```
$ find . -name '*.php' -not -path './node_modules/*' -print0 | xargs -0 -n1 php -l
No syntax errors detected in ./infobox.php
No syntax errors detected in ./dist/index.asset.php
No syntax errors detected in ./dist/frontend.asset.php
No syntax errors detected in ./dist/modules.asset.php
No syntax errors detected in ./includes/post-meta.php
No syntax errors detected in ./includes/font-loader.php
No syntax errors detected in ./includes/helpers.php
```

**Runtime smoke test** — plugin loaded against stubbed WordPress functions with `error_reporting(E_ALL)`, exercising `init`, `admin_enqueue_scripts` (both the `post.php` and the `themes.php?…gutenberg-edit-site` paths), `render_block` (including malformed attributes and a missing `blockName` key), and `wp_footer`:

Re-run after the floor was raised to WP 6.0, across the declared range:

| WP version simulated | `register_block_type()` receives | Result |
|---|---|---|
| 6.0 (floor) | plugin path | PASS |
| 6.5 | plugin path | PASS |
| 7.0.3 (current) | plugin path | PASS |
| 7.10 (synthetic) | plugin path | PASS |

Run on **PHP 8.5.8** and **PHP 8.2.29**. Zero warnings, zero deprecations, zero notices in every combination.

An earlier pass of the same harness also covered WP 5.6 and 5.6.2, which correctly took the block-**name** branch before that branch was removed. Those versions are now below the declared floor.

**PHP 7.4 – 8.1:** no 7.x or 8.0/8.1 binary is installed on this machine, so those were verified by **construct inspection** rather than execution. A grep confirms nothing above the 7.4 floor survives anywhere in the codebase — no `str_contains`/`str_starts_with`/`str_ends_with`, no `match`, no named arguments, no constructor promotion, no `?->`, no `readonly`, no enums, no `never`. The only PHP 8-only call that existed (`str_contains`) is gone. Running the smoke test under a real PHP 7.4 container would close this gap.

**phpcs:** not installed (`phpcs -i` → not found). Skipped rather than installing global tooling.

**Git:** all work is on branch `infobox-dev`, uncommitted and unpushed, for your review.
