import os
import re


def get_file_content(file):
    with open(file, encoding='utf-8') as file_obj:
        contents = file_obj.read()
        return contents.rstrip()


def get_files():
    fns = os.listdir('svg')
    file_name_list = []
    for fn in fns:
        file_name_list.append(fn.replace(".svg", ""))
    return file_name_list


def create_file(file_path, content):
    f = open(file_path, "a")
    f.write(content)
    f.close()


def first_upper(name):
    return re.sub(r'(^[a-z])', lambda x: x.group(1)[0].upper(), name)


def make_tsx():
    file_names = get_files()
    indexContent=''
    for fn in file_names:
        start_content = 'import { IconProps } from "../props"\nexport default function %s({color = "currentColor",size = "1em"}: IconProps) {\nreturn (' % first_upper(
            fn)
        content = get_file_content('svg/' + fn + '.svg')
        content = re.sub(r'<svg width="\d{2}" height="\d{2}"', '<svg width={size} height={size}', content)
        content = re.sub(r'(-[a-z])', lambda x: x.group(1)[1].upper(), content)
        content = re.sub(r'"#......"', "{color}", content)
        content = re.sub(r'<g .*?>', "", content)
        content = re.sub(r'</g>', "", content)
        content = re.sub(r'<defs>[\s\S\W]+?</defs>', "", content)
        new_content = start_content + content + ')}'
        create_file("icons/" + fn + '.tsx', new_content)
        indexContent+="export {default as %s} from './icons/%s'\n" % (first_upper(fn), fn)
    create_file("index.ts",indexContent)

make_tsx()