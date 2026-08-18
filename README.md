# Infobox

> Highlight Your Key Features & Hold Audience Attention with Info Box Block.

Infobox is a WordPress Gutenberg block that lets you present features, key points, services and statistics in an attractive, fully customizable info box — without writing any CSS.

- **Plugin URI:** https://essential-blocks.com
- **WordPress.org:** https://wordpress.org/plugins/infobox/
- **Author:** [WPDeveloper](https://wpdeveloper.com)
- **License:** GPL-3.0-or-later

## Features

- **Completely customizable** — content, icons, colors, spacing and typography.
- **Super light-weight** — no extra resources loaded, optimized for fast rendering and instant live editing.
- **Native block editor experience** — full inspector controls with responsive settings.
- **Dedicated support** — via the [plugin support forum](https://wordpress.org/support/plugin/infobox).

## Requirements

| | Minimum |
|---|---|
| WordPress | 6.0 |
| PHP | 7.4 |
| Tested up to (WP) | 7.0 |

## Installation

**From WordPress admin**

1. Go to *Plugins → Add New* and search for **Infobox**.
2. Install and activate.
3. Add the **Infobox** block from the block inserter in the editor.

**Manually**

1. Download the plugin zip and upload it to `wp-content/plugins/`.
2. Activate **Infobox** from *Plugins* in wp-admin.

## Development

Clone with submodules — `controls/` and `lib/style-handler/` are git submodules and the
plugin does not build (or run) without them:

```bash
git clone --recurse-submodules git@github.com:EssentialBlocks/infobox.git
# already cloned?
git submodule update --init --recursive
```

The block is built with [`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/).

```bash
npm ci            # install exactly what package-lock.json pins
npm run start     # development build with watch
npm run build     # production build into dist/
npm run format    # format source
npm run lint:js   # lint JavaScript
npm run lint:css  # lint styles
```

`package-lock.json` is committed and CI installs with `npm ci`, so a release build
resolves to exactly the dependency tree that was tested. Use `npm ci` rather than
`npm install` unless you are deliberately changing a dependency.

Source lives in `src/`, shared controls in `controls/`, PHP entry point is `infobox.php`,
and compiled assets are written to `dist/`.

### Node version

`.nvmrc` pins **Node 14**, matching `node-version` in `.github/workflows/deploy.yml`.
Run `nvm use` to match the release environment.

Node 14 reached end of life on 2023-04-30. It is pinned deliberately, and it is
**technical debt** — not a recommendation:

- The **root** build is not the problem. It has been verified on Node 20 / npm 10 and
  produces a byte-identical `dist/index.js`. It would move to a current LTS today.
- The **`controls/` submodule** is the constraint. Its dependency tree only resolves on
  npm 6, which ships with Node 14:
  - `react-sortable-hoc@2.0.0` declares `peer react@"^16.3.0 || ^17.0.0"`, while the
    `@wordpress/*` packages require React 18. npm 7+ enforces peer ranges, so
    `npm install` fails with `ERESOLVE`.
  - `npm install --legacy-peer-deps` gets past that, then the build fails with
    `Cannot find module 'ajv/dist/compile/codegen'` — flattening hoists `ajv@6`
    (required by eslint 8) while `ajv-keywords@5` needs the `ajv@8` API.
    `--legacy-peer-deps` is therefore **not** a fix and must not be adopted in CI.
  - Bumping the submodule does not help: `controls` master still declares
    `react-sortable-hoc@^2.0.0` with no `overrides` and no `engines`.

**Before the pipeline can move to Node 22+**, `controls` must migrate off
`react-sortable-hoc` (the upstream successor is [`@dnd-kit`](https://dndkit.com/), which
`controls` master already depends on for other code). Raising `node-version` on its own
would break the ability to build `controls` at all. Track this as a separate task and
change `.nvmrc`, `engines`, and `deploy.yml` together with that migration.

### `dist/` is a committed build artifact

`dist/` is committed, and CI only rebuilds part of it. `npm run build` at the repo root
emits **only** `dist/index.js` and `dist/style.css`. The rest — `dist/modules.js`
(the controls UI layer), `dist/frontend.js`, `dist/style-modules.css` — is produced by a
second build inside `controls/`, which `deploy.yml` does not run.

The pinned `controls` commit matches the committed `dist/modules.js`. **Do not bump the
`controls` submodule without rebuilding and committing `dist/modules.js`**, or the
release will ship a stale bundle against newer source.

## Branches

| Branch | Purpose |
|---|---|
| `master` | Stable, released code. Default branch. |
| `latest` | Staging for the next release. |
| `dev` | Active development. Open pull requests against this branch. |

## Contributing

Issues and pull requests are welcome at [EssentialBlocks/infobox](https://github.com/EssentialBlocks/infobox). Please branch off `dev` and target `dev` with your pull request.

## Contributors

- [@wpdevteam](https://profiles.wordpress.org/wpdevteam/) — WPDeveloper
- [@re_enter_rupok](https://profiles.wordpress.org/re_enter_rupok/)
- [@Asif2BD](https://profiles.wordpress.org/asif2bd/)
- [@rahat89](https://profiles.wordpress.org/rahat89/)
- [@RahatSheikhLeon](https://github.com/RahatSheikhLeon)

## Support & Documentation

- Documentation: https://essential-blocks.com/docs/
- Support forum: https://wordpress.org/support/plugin/infobox
- Report an issue: https://github.com/EssentialBlocks/infobox/issues

## License

Licensed under the [GNU General Public License v3.0 or later](https://www.gnu.org/licenses/gpl-3.0.html).
