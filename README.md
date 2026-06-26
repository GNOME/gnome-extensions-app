# ![logo] GNOME Extensions
GNOME Extensions is a small app for managing GNOME Shell
extensions. It is usually built as part of gnome-shell, but can be
used as a stand-alone project as well.

Bugs should be reported to the GNOME [bug tracking system][bug-tracker].

## Installation
If Extensions is not already installed on your GNOME system, we
recommend getting it from [flathub].

<a href='https://flathub.org/apps/details/org.gnome.Extensions'>
  <img width='240' alt='Download on Flathub' src='https://flathub.org/assets/badges/flathub-badge-en.png'/>
</a>

## Building
Like most GNOME projects, gnome-extensions-app uses the [meson] build system.

You can build and install the project as follows:

```
$ meson setup --prefix=/usr _build
$ meson compile -C _build
$ meson install -C _build
$ /usr/bin/gnome-extensions-app
```

For development you can also install the project to a temporary directory (e.g. replace `/usr` with `/tmp/install` above).

## License
gnome-extensions-app is distributed under the terms of the GNU General Public
License, version 2 or later. See the [COPYING][license] file for details.

[logo]: logo.png
[bug-tracker]: https://gitlab.gnome.org/GNOME/gnome-extensions-app/issues
[flathub]: https://flathub.org
[meson]: https://mesonbuild.com
[license]: COPYING
