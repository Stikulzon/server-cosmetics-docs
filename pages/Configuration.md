# Configuration
After first run, ServerCosmetics will generate the following configuration files:
```
config - your config folder
└── ServerCosmetics
    ├── cosmetics        - Directory of cosmetics files (currently only hats).
    ├── ItemSkins        - Directory of item skins files.
    ├── config.yml       - Main configuration file.
    ├── cosmeticsGUI.yml - Cosmetics GUI configuration file.
    └── ItemSkinsGUI.yml - Item skins GUI configuration file.
```
In cosmetics and ItemSkins will be demo cosmetic configs.
## config.yml
In main config you can find permissions and config reload messages.
Default values:
```yaml
######################
## Main Config File ##
######################

debug: false

# If the mod cannot get permissions from config, the default one will be used
permissions:
  reloadAllConfigs: servercosmetics.reload
  reloadItemSkins: servercosmetics.reload.itemskins
  reloadCosmetics: servercosmetics.reload.cosmetics
configReload:
  message:
    success: '&aConfig successfully reloaded!'
    error: '&cAn error occurred during configs reload!'
legacyMode: false # If you don't know what it is, you want it to be false
```
## cosmeticsGUI.yml
In cosmeticsGUI you can configure gui names cosmetic slots, color picker colors, permission to open gui and buttons.

> **IMPORTANT:** Ensure the cosmetic slot value does not exceed the GUI's size limits. For now it's 53 (9x6) for main gui and 44 (9x5) for color picker. 
> With replaceInventory is set to true, you can use 36 more. 

> Also, slot counting in minecraft starts from 0.

In button configuration, you can add or remove lore or custom model data as you wish.
Default values:
```yaml
###############################
## Cosmetics GUI Config File ##
###############################

guiName: '&f솯䍒䍒䍒䍒䍒䍒䍒䍒䍒䍒' # GUI title.
replaceInventory: false # With it you can use player inventory as GUI slots.
slots:
  cosmetic: # Cosmetic slots.
    - 19
    - 20
    - 21
    - 22
    - 23
    - 24
    - 25
    - 28
    - 29
    - 30
    - 31
    - 32
    - 33
    - 34
    - 37
    - 38
    - 39
    - 40
    - 41
    - 42
    - 43
  colorInput: 28
  colorOutput: 34
  color: # Color picker slots.
    - 21
    - 22
    - 23
    - 30
    - 31
    - 32
    - 39
    - 40
    - 41
  colorGradient: # Gradient slots.
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
paintItemCustomModelData: 1
colorPicker:
  hexValues: # The number of HEX values should match the number of slots in the color picker.
    - ff0000
    - ff7700
    - ffff00
    - ff0099
    - ffffff
    - 09ff00
    - 8800ff
    - 0000ff
    - 00ffff
  name: §f섈 # Color picker title.
  saturationAdjustmentValue: 20.0 # Saturation adjustment.
permissions:
  openGui: servercosmetics.gui.cosmetics # Permission that needed to open gui.
texts:
  unlocked: §a(Unlocked) # Text displayed for unlocked items.
  locked: §c(Locked) # Text displayed for locked items.
pageIndicatorEnabled: false # Is page indicator enabled.
colorInput:
  signType: minecraft:acacia_wall_sign # Sign type.
  signColor: WHITE # The color of the sign text.
  textLines: # Sign text.
    - Enter the color in
    - HEX format
    - 'Example: #FFFFFF'
  messages:
    success: §aColor successfully changed! # The message displayed to the player upon successful color change.
    error: §cIncorrect color format! # The error message displayed when an incorrect color format is entered.
buttons:
  next:
    item: minecraft:paper
    slotIndex: 51
    customModelData: 10
    name: Next
  enterColor:
    item: minecraft:oak_sign
    slotIndex: 9
    lore:
      - §eEnter the color in HEX format
      - §ein the first line of the sign
    name: Enter custom color
  increaseBrightness:
    item: minecraft:paper
    slotIndex: 16
    customModelData: 10
    name: Increase brightness
  removeItem:
    item: minecraft:paper
    slotIndex: 49
    customModelData: 12
    name: Remove item
  pageIndicator:
    item: minecraft:paper
    slotIndex: 53
    customModelData: 0
    name: Page
  previous:
    item: minecraft:paper
    slotIndex: 47
    customModelData: 11
    name: Back
  toggleColorView:
    name: Toggle view
    slotIndex: 10
    item: minecraft:diamond_chestplate
  cosmeticFilter:
    show-owned-skins:
      item: minecraft:golden_chestplate
      slotIndex: 4
      lore:
        - '&7All cosmetics'
        - '&aAvailable cosmetics &7(Selected)'
        - ''
        - '&aClick to change mode!'
      name: '&bCosmetic Filter'
    show-all-skins:
      item: minecraft:diamond_chestplate
      slotIndex: 4
      lore:
        - '&aAll cosmetics &7(Selected)'
        - '&7Available cosmetics'
        - ''
        - '&aClick to change mode!'
      name: '&bCosmetic Filter'
  decreaseBrightness:
    item: minecraft:paper
    slotIndex: 15
    customModelData: 11
    name: Decrease brightness
```

## ItemSkinsGUI.yml
Item skins gui config is mostly the same as the cosmeticsGUI.
Default config:
```yaml
###############################
## ItemSkins GUI Config File ##
###############################

guiName: '&f솱䍒䍒䍒䍒䍒䍒䍒䍒䍒䍒'
cosmeticSlots:
  - 19
  - 20
  - 21
  - 22
  - 23
  - 24
  - 25
  - 28
  - 29
  - 30
  - 31
  - 32
  - 33
  - 34
  - 37
  - 38
  - 39
  - 40
  - 41
  - 42
  - 43
permissions:
  openGui: servercosmetics.gui.itemskins
pageIndicatorEnabled: false
messages:
  unlocked: §a(Unlocked)
  locked: §c(Locked)
slots:
  itemSlot: 4
buttons:
  next:
    item: minecraft:paper
    slotIndex: 51
    customModelData: 10
    name: Next
  removeItem:
    item: minecraft:paper
    slotIndex: 49
    customModelData: 12
    name: Remove item
  pageIndicator:
    item: minecraft:paper
    slotIndex: 53
    customModelData: 0
    name: Page
  previous:
    item: minecraft:paper
    slotIndex: 47
    customModelData: 11
    name: Back
  skinFilter:
    show-all-skins:
      item: minecraft:diamond_chestplate
      slotIndex: 10
      lore:
        - '&aAll skins &7(Selected)'
        - '&7Available skins'
        - ''
        - '&aClick to change mode!'
      name: '&bCosmetic Filter'
    show-owned-skins:
      item: minecraft:golden_chestplate
      slotIndex: 10
      lore:
        - '&7All skins'
        - '&aAvailable skins &7(Selected)'
        - ''
        - '&aClick to change mode!'
      name: '&bCosmetic Filter'
```