### Standard Cosmetics

Create a YAML file for each cosmetic in the `ServerCosmetics/Cosmetics/` directory (e.g., `cool_hat.yml`). The filename (without `.yml`) becomes the cosmetic's ID, used for its texture.

**File: `ServerCosmetics/Cosmetics/cool_hat.yml`**
```yaml
# This is the ID used for the texture (cool_hat.png in Assets/item/)
# and by /wearcosmetic player cool_hat
cosmetic-item:
  material: minecraft:leather_helmet # Base Minecraft item
  display-name: "&bCool Hat"         # Name shown in GUI
  lore:                              # Lore shown in GUI
    - "&7A very cool hat."
    - "&eSpecial Edition!"
permission: "servercosmetics.cosmetic.cool_hat" # Permission to use this cosmetic
```

*   `cosmetic-item`:
    *   `material` (string): The base Minecraft item ID (e.g., `minecraft:leather_helmet`, `minecraft:carved_pumpkin`). If `minecraft:leather_horse_armor` is used, the cosmetic will be dyeable via the color picker.
    *   `display-name` (string): The name of the cosmetic as it appears in the GUI. Supports color codes.
    *   `lore` (list of strings): Description lines for the cosmetic in the GUI. Supports color codes.
*   `permission` (string): The permission node required for a player to equip and use this cosmetic.
*   **Texture**: The cosmetic will use a texture from `ServerCosmetics/Assets/item/<filename>.png`. For `cool_hat.yml`, it expects `ServerCosmetics/Assets/item/cool_hat.png`.