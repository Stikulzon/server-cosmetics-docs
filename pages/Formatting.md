# Formatting
Mod supports MiniMessage and legacy formatting.
Example:
```yaml
"<blue> Color </blue> can be <green>like this" # MiniMessage formatting
"<#d24c9f> Color can be like this" # MiniMessage HEX color formatting
"&f Color can&c§l be like§o this" # legacy formatting
"&f&n Color <red>can be like</red> this" # legacy and MiniMessage formatting
```
Example usage:
**beekeeper.yml**
```yaml
cosmetic-item:
  material: PAPER
  display-name: "&bBeekeeper"
  customModelData: 101
  lore:
    - "<blue>Some </blue> description & &bformatting"

permission: "cosmetics.helmet.beekeeper"
```
