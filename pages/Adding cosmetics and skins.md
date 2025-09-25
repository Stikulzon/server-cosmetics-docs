# Adding cosmetics

## Standard Cosmetics
Create a YAML file for each cosmetic in the `ServerCosmetics/Cosmetics/` directory and subdirectories (e.g., `cool_hat.yml`). The filename (without `.yml`) becomes the cosmetic's ID, used for its texture.

**File: `ServerCosmetics/Cosmetics/cool_hat.yml`**
```yaml
material: minecraft:paper # Base Minecraft item. Required field.
display-name: "&bCool Hat"         # Item Name. Can be empty, but not recommended.
lore:                              # Item Lore. Can be empty.
  - "<yellow> very cool hat.</yellow>"
  - "<blue>Special Edition!"
permission: "cosmetic.cool_hat" # Permission to use this cosmetic. Required field.
```

*   `material` (string): The base Minecraft item ID (e.g., `minecraft:paper`, `minecraft:diamond`). If `minecraft:leather_horse_armor` is used, the cosmetic will be dyeable via the color picker.
*   `display-name` (string): The name of the cosmetic. Supports color codes.
*   `lore` (list of strings): Description lines for the cosmetic. Supports color codes.
*   `permission` (string): The permission node required for a player to equip and use this cosmetic.
*   **Texture**: The cosmetic will use a texture from `ServerCosmetics/Assets/textures/<filename>.png` (or it's subdirectories). For `cool_hat.yml`, it expects `ServerCosmetics/Assets/textures/cool_hat.png` (or it's subdirectories). Same goes for models.



## Standard Item Skins

Create a YAML file for each item skin in the `ServerCosmetics/ItemSkins/` directory (e.g., `flaming_sword_skin.yml`). The filename (without `.yml`) becomes the skin's ID, primarily used for its texture.

**File: `ServerCosmetics/ItemSkins/flaming_sword_skin.yml`**
```yaml
# This filename (flaming_sword_skin) is used for the texture (flaming_sword_skin.png in Assets/textures/)
material: # Can be a single item or a list of items this skin applies to
  - minecraft:diamond_sword
  - minecraft:netherite_sword
display-name: "&cFlaming Sword Skin"
lore:
  - "A Sword"
  - ""
  - "<red>Makes your sword hot!"
permission: "servercosmetics.skin.flaming_sword"
```

*   `material` (string or list of strings): The Minecraft item ID(s) that this skin can be applied to.
*   `display-name` (string): The name of the skin as it appears in the Item Skins GUI. Supports color codes.
*   `lore` (list of strings): Description lines for the skin in the GUI. Supports color codes.
*   `permission` (string): The permission node required for a player to use this skin.
*   **Texture**: The skin will use a texture from `ServerCosmetics/Assets/textures/<filename>.png` (or it's subdirectories). For `flaming_sword_skin.yml`, it expects `ServerCosmetics/Assets/textures/flaming_sword_skin.png` (or it's subdirectories). Same goes for models.

## Adding Textures and Models (`Assets/`)

ServerCosmetics uses Polymer to create a server-side resource pack. You can add your own custom textures and item models to this pack.

*   Place `.png` files (for textures) into `ServerCosmetics/Assets/textures/` or any subdirectories.
*   Place `.json` files (for item models) into `ServerCosmetics/Assets/models/` or any subdirectories.
Theoretically, you can even place them in any `ServerCosmetics/Assets/` subdirectory as you wish.


**Naming and Referencing:**
*   For cosmetics and item skins, the texture name is derived from the cosmetic/skin's YAML filename (e.g., `cool_hat.yml` -> `cool_hat.png`).
*   Buttons with a `textureName` property in `CosmeticsGUI.yml` or `ItemSkinsGUI.yml` will look for `Assets/<subdirectories>/<textureName>.png` .
*   The GUI background textures (`cosmetics_menu.png`, `item_skins_menu.png`, `color_picker_menu.png` etc.) are also expected in `Assets/` subdirectories. You can override the default ones by placing your own files with these names.
*   Item models defined in `.json` files should typically reference textures using the format `"layer0": "servercosmetics:item/<texture_filename_without_extension>"`.

Also, animations are suppoerted in the same way.

###  <span style="color:red;">IMPORTANT!</span>
Models must have a texture path of `servercosmetics:item/<skinid>`, example:
```json
"textures": {
    "0": "servercosmetics:item/cool_hat"
}
```

## Armor cosmetics
0.2.2+1.21.1 added a new cosmetic type - armor. This page will help you to get used to it.

First, let's create a config for a helmet.
```yml
# coolarmor_helmet.yml
type: HELMET
display-name: "<blue>Cool Helmet"
lore:
  - "Some description"

permission: "cosmetics.armor.coolarmor"
```
Overall, there are 4 types for armor: `HELMET`, `CHESTPLATE`, `LEGGINGS` and `BOOTS`. Unlike other cosmetics, you don't need to specify material for armor.

Now, we will add textures:
`coolarmor_helmet.png`
`coolarmor_layer_1.png`
`coolarmor_layer_2.png`

In vanilla, armor has 2 layers (how it looks on a player) and "icons" (how it looks in inventory, dropped etc.) for each armor piece. So you do need to have texture files for layers and an "icon" for each item you configure.


The files should be named in format
`<main name>_<item type>` for item icons and configs and `<main name>_layer_<number>` for armor textures.
Example of files for a full armor set:
```
Textures:
`coolarmor_helmet.png`
`coolarmor_chestplate.png`
`coolarmor_leggings.png`
`coolarmor_boots.png`

`coolarmor_layer_1.png`
`coolarmor_layer_2.png`

Configs:
`coolarmor_helmet.yml`
`coolarmor_chestplate.yml`
`coolarmor_leggings.yml`
`coolarmor_boots.yml`
```



## Polymer autohost
To setup polymer autohost see **[Official Polymer Documentation](https://polymer.pb4.eu/latest/user/resource-pack-hosting/)**