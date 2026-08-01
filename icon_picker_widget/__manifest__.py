# -*- coding: utf-8 -*-
{
    "name": "Icon Picker Widget",
    "summary": "Easily select and assign Font Awesome icons to any Char field using a visual icon picker",
    "description": """
Icon Picker Widget for Odoo 17
==============================

A powerful and user-friendly OWL widget that adds a visual icon picker to any
Char field in Odoo 17 backend views. Instead of manually typing icon class names,
users can simply click "Pick an Icon" and choose from a rich library of
Font Awesome, Fontello, and IcoMoon icons through Odoo's built-in Media Dialog.

Key Features
------------
* **Visual Icon Picker** — Click a button to open Odoo's Media Dialog and browse icons visually.
* **Live Preview** — See a real-time preview of the selected icon right next to the field.
* **Easy Integration** — Simply add ``widget="icon_picker"`` to any Char field in your XML views.
* **Multiple Icon Libraries** — Supports Font Awesome, Fontello, and IcoMoon icons out of the box.
* **OWL Component** — Built with Odoo 17's modern OWL framework for optimal performance.

Usage
-----
In your XML view definition, add the widget attribute to any Char field::

    <field name="your_icon_field" widget="icon_picker"/>

The widget will display:
1. A read-only text input showing the selected icon class (e.g., ``fa-home``)
2. A "Pick an Icon" button that opens the media dialog
3. A live preview of the currently selected icon
    """,
    "author": "DK Saini",
    "website": "https://github.com/DK-SAINI",
    "category": "Technical",
    "version": "17.0.1.0.0",
    "depends": ["base"],
    "assets": {
        "web.assets_backend": [
            "icon_picker_widget/static/src/libs/fontawesome/css/*.css",
            "icon_picker_widget/static/src/js/icon_picker_widget.js",
            "icon_picker_widget/static/src/css/icon_picker_widget.css",
            "icon_picker_widget/static/src/xml/icon_picker_widget.xml",
        ],
    },
    "images": [
        "static/description/banner.jpg",
    ],
    "support": "dk.odootech@gmail.com",
    "license": "LGPL-3",
    "installable": True,
    "auto_install": False,
    "application": False,
}
