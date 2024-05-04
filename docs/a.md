# 备注

- `ui/snippets/footer/Footer.tsx` 底部修改
- `configs/envs/.env.base` 参考配置文件

```sh

for file in public/favicon/*; do
    if [ $file != "public/favicon/favicon.ico" ]; then
        cp public/favicon/favicon.ico $file
    fi
done

```
