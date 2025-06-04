# Adding cosmetics
To create your own cosmetics, you first need to create a cosmetics file.
Example:
**example_cosmetic.yml**
```yaml
cosmetic-item:
  # Material. Required field.
  material: PAPER
  # display-name. Can be empty, but not recommended.
  display-name: "<white>Cosmetics name"
  # Custom Model Data. Can be empty.
  customModelData: 1
  # Lore. Can be empty.
  lore:
    - "<blue>Your lore</blue>"

permission: "cosmetics.helmet.example_cosmetic" # Required wear permission. Required field.
```
Simply drop it to cosmetics folder in ServerCosmetics.
It should look like this:
```
config
└── ServerCosmetics
    └── cosmetics
        └── example_cosmetic.yml
```
You can create folders and sort files in cosmetics folder as you want!

Now write `/cm reload` and check it in game!

# Adding skins
Adding skins is even simpler!
Сreate a new skins file:
**example_skin.yml**
```yaml
# Materials. Required at least one.
material: 
  - iron_sword
  - diamond_sword
  - netherite_sword
# Custom Model Data. Can be empty, but are you sure about it?
custom-model-data: 3
# Permission. Required field.
permission: "itemskins.sword.example_skin"
# Skin name. Can be empty, but not recommended.
display-name: "&dDark Queen Sword"
# Lore. Can be empty.
lore:
  - "Lore"
  - ""
  - "Example lore"
```
Simply drop it to ItemSkins folder in ServerCosmetics.
It should look like this:
```
config
└── ServerCosmetics
    └── ItemSkins
        └── example_skin.yml
```
Now write `/is reload` and check it in game!