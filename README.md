**Table of Contents**

[TOC]

## Pre-requisites

Create a `.npmrc` file in project directory

```sh
@welab:registry=https://nexus-repo.prod-ss.welabts.net/repository/npm-hosted/
//nexus-repo.prod-ss.welabts.net/repository/npm-hosted/:_authToken=NpmToken.ae6f016c-58b7-392f-9594-5aa2b283a0b2
```

## Installation

`npm i @welab/welab-rn-ui`

`yarn add @welab/welab-rn-ui`

## Usage

```ts
import {
    Text,
    Button,
    Icon,
    Spacing,
    Color,
    ...
} from '@welab/welab-rn-ui'
```

## Example Apps (Android only)

<https://expo.dev/@him0305/welab-rn-ui-example>

## Development

### Debugging

Install following packages

- [yarn](https://yarnpkg.com/getting-started/install)
- [expo](https://docs.expo.dev/)

Since this is a library project, we have to debug via an example project.

1. Run `expo start` in `/example`

Because of office network restriction, `Local` connection is the only way to connect device.

2. Select `Local` connection
3. Connect your device or simultor
4. Click `Run on ...` in left side menu

After any changes

5. Run `yarn build` in `/`

### Update SVG resources

1. Export svg file from [Figma page](https://www.figma.com/file/p3k3mScHRIb7gXtn43fmNv/?node-id=0%3A12)
2. Put it into `/src/icon/svg`
3. Run `yarn svg`
4. Update icon name in `/src/icon/index.ts` by **snake_case**

### Out of sync in example project

You may notice there is a strange behavior when running example project,

- Read library source code (\*.js) from `/lib`
- Read library type declarations (\*.d.ts) from `/example/node_modules/@welab/welab-rn-ui`

Therefore if you should publish a new testing version (alpha/beta) to let type declarations take effect.

## Deployment

We are following [Semantic Versioning](https://semver.org/). To trigger a deployment, create tag by exact version that you want to publish in `release/*` branch.

e.g.:

- Create tag `1.0.0` in branch `release/1.0.0`
- Create tag `1.1.0-rc.10` in branch `release/1.1.0`

## Git flow

![Git flow](diagrams/git_flow.svg?raw=true)

## API references

<https://welab.atlassian.net/wiki/spaces/VIDEU/pages/1757872215/WeLab+React+Native+UI+Library>

## Road map

- <https://welab.atlassian.net/browse/ACBN-229>
- Resolve out of sync in example project

## Legacy resources mapping

### Icon

<details><summary>Click to expand</summary>

| Legacy                 | Replacement                  |
| ---------------------- | ---------------------------- |
| `add`                  | `add_circle`                 |
| `add_tin`              | `add_circle`                 |
| `arrow_right_new`      | `arrow_next`                 |
| `arrow_right`          | `arrow_next`                 |
| `arrow-left-circle`    | `arrow_back_circle`          |
| `back`                 | `arrow_back`                 |
| `bank_transfer_item`   | `bank_transfer`              |
| `bar_back`             | `arrow_back`                 |
| `bar_close`            | `close`                      |
| `bottom_modal_close`   | `close`                      |
| `bulb_lean`            | `bulb_2`                     |
| `bus_ongoing`          | `go_save`                    |
| `calendar_clock`       | `calendar_clock`             |
| `car`                  | `go_save`                    |
| `cardless_withdrawal`  | `withdraw`                   |
| `circle_add`           | `add_circle`                 |
| `clock_complete`       | `clock`                      |
| `close_dialog`         | `close`                      |
| `close_eye`            | `hide`                       |
| `close_popup`          | `close`                      |
| `copy_to_clipboard`    | `copy`                       |
| `correct_blue`         | `checkbox_on`/`checkbox_off` |
| `correct`              | `checkbox_on`/`checkbox_off` |
| `delete`               | `rubbish_bin`                |
| `dollar_circle`        | `dollar`                     |
| `done`                 | `checkbox_on`/`checkbox_off` |
| `edit_2`               | `edit`                       |
| `errormark`            | `exclamation_mark`           |
| `eye-closed`           | `hide`                       |
| `eye`                  | `show`                       |
| `faq`                  | `question_circle`            |
| `fee`                  | `fee_charge`                 |
| `floating_close`       | `close`                      |
| `fpsQrCode`            | `qr_code`                    |
| `freeze`               | `pause`                      |
| `group_saving_detail`  | `go_save`                    |
| `group_saving_stack`   | `go_save`                    |
| `help`                 | `faq`                        |
| `info_filled`          | `information`                |
| `Instagram`            | `instagram`                  |
| `mastercard`           | `card`                       |
| `menu_transfer`        | `transfer`                   |
| `mgm_plain`            | `mgm`                        |
| `mgm`                  | `mgm_color`                  |
| `mobile_phone`         | `mobile`                     |
| `open_eye`             | `show`                       |
| `other_transaction`    | `transfer`                   |
| `overseas`             | `plane`                      |
| `privacy_policy`       | `legal`                      |
| `promotion`            | `promote`                    |
| `report_lost`          | `card_lost`                  |
| `rewards`              | `gift`                       |
| `scrolldown`           | `arrow_down`                 |
| `select_down`          | `arrow_down`                 |
| `set_limit`            | `limit`                      |
| `setting_fps`          | `fps`                        |
| `setting_key`          | `pin`                        |
| `setting_password`     | `lock`                       |
| `setting_personalinfo` | `box_user`                   |
| `settings`             | `setting`                    |
| `summary`              | `pie_chart`                  |
| `tick`                 | `checkbox_on`/`checkbox_off` |
| `topup`                | `dollar_add`                 |
| `transfer settings`    | `transfer_setting`           |
| `warning_circle`       | `exclamation_mark`           |
| `website`              | `web`                        |
| `withdrawal`           | `withdraw`                   |
| `withdrawPending`      | `pending`                    |

</details>

### Color

<details><summary>Click to expand</summary>

| Legacy                           | Replacement            |
| -------------------------------- | ---------------------- |
| `#D3D3D3`                        | Alto `#DDDDDD`         |
| Alto `#D9D9D9`                   | Alto `#DDDDDD`         |
| AltoLight `#DDDDDD`              | Alto `#DDDDDD`         |
| AmethystSmoke `#9690B8`          | LightPurple `#9690BB`  |
| AmethystSmokeLight `#9690BB`     | LightPurple `#9690BB`  |
| BalticSea `#292830`              | DarkGrey `#292830`     |
| Black `#000000`                  | DarkGrey `#292830`     |
| BrilliantRose `#F2599B`          | Pink `#F2599B`         |
| BrilliantRoseLight `#F25A9B`     | Pink `#F2599B`         |
| Charade `#2C2A35`                | DarkGrey `#292830`     |
| Chatelle `#AEA8BD`               | LightPurple `#9690BB`  |
| DarkIndigo `#24124C`             | DarkGrey `#292830`     |
| DimedColor `#BDB7C9`             | LightPurple `#9690BB`  |
| DustyGray `#979797`              | LightGrey `#AAAAAA`    |
| EbonyClay `#1E2733`              | DarkGrey `#292830`     |
| FrenchRose `#F2599A`             | Pink `#F2599B`         |
| Froly `#F57376`                  | Salmon `#F87468`       |
| Gallery `#EFEFEF`                | Alto `#DDDDDD`         |
| Ghost `#CECDD6`                  | Ghost `#CECDD6`        |
| Gray `#808080`                   | LightGrey `#AAAAAA`    |
| GreyLight `#E9E9E9`              | Alto `#DDDDDD`         |
| HavelockBlue `#2988DC`           | Blue `#2988DC`         |
| HavelockBlue30 `#2988DC49`       | DarkGrey `#292830`     |
| HitPink `#FCB288`                | LightGrey `#AAAAAA`    |
| JetStream `#B7D3CB`              | JetStream `#B7D3CB`    |
| LightningYellow `#F9AA2B`        | Mango `#F9AA2B`        |
| LightSteelBlue `#AEBCDC`         | CloudyBlue `#AEBCDC`   |
| Manatee `#97979B`                | Manatee `#97979B`      |
| Mandy `#E04356`                  | Red `#E11469`          |
| Mango `#FCA22D`                  | Orange `#FF9800`       |
| Mantis `#5FBE55`                 | Green `#5FBE55`        |
| MineShaft `#333333`              | DarkGrey `#292830`     |
| Mischka `#D3D0DC`                | Alto `#DDDDDD`         |
| MySinLight `#FCAF22`             | Mango `#F9AA2`         |
| OrangePeel `#FF9800`             | Orange `#FF9800`       |
| PaleGrey `#F3F2F7`               | PaleGrey `#F3F2F7`     |
| Perano `#BBA6E7`                 | BrightPurple `#B8ACE4` |
| PersianBlue `#3213DD`            | Orange `#FF980`        |
| PickledBluewood `#314053`        | DarkGrey `#292830`     |
| PurpleGrayLight `#ECEBF2`        | Alto `#DDDDDD`         |
| Razzmatazz `#E11469`             | Red `#E11469`          |
| ScienceBlue `#006ABB`            | Blue `#2988DC`         |
| Silver `#CCCCCC`                 | Alto `#DDDDD`          |
| SilverChalice `#AAAAAA`          | LightGrey `#AAAAAA`    |
| SilverChaliceLight `#B0B0B0`     | LightGrey `#AAAAAA`    |
| TangerineYellow `#FFC800`        | Yellow `#FFC700`       |
| TanHide `#F7865C`                | Orange `#FF980`        |
| Tuna `#312F3B`                   | DarkGrey `#292830`     |
| Twilight `#D8B7C6`               | DustyPink `#D8B7C6`    |
| Valentino `#23104C`              | DarkPurple `#23104C`   |
| Valentino60 `rgba(35,16,76,0.6)` | Alabaster `#F9F9F9`    |
| White `#FFFFFF`                  | White `#FFFFFF`        |
| WildSand `#F4F4F4`               | Alto `#DDDDDD`         |

</details>
