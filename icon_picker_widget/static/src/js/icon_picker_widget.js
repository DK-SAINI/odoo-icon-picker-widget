/** @odoo-module */

import { registry } from "@web/core/registry";
import { standardFieldProps } from "@web/views/fields/standard_field_props";
import { useService } from "@web/core/utils/hooks";
import { MediaDialog } from '@web_editor/components/media_dialog/media_dialog';
import { Component, useState, onMounted, useRef, onWillUpdateProps } from "@odoo/owl";


export class IconPickerField extends Component {
    static props = { ...standardFieldProps };
    static template = "icon_picker_widget.IconPickerField";


    setup() {
        this.dialog = useService("dialog");
        this.state = useState({
            icon: this.props.record.data[this.props.name] || null,
        });

        onWillUpdateProps(async (newProps) => {
            // Update the icon state if the record changes
            this.state.icon = newProps.record.data[newProps.name] || null;
        });
    }

    // This function will be triggered when the icon picker button is clicked
    onClickIconPicker() {
        this.dialog.add(MediaDialog, {
            resModel: this.props.record.resModel,
            noDocuments: true,
            noVideos: true,
            noImages: true,
            save: (icon) => {
                const el = icon instanceof HTMLElement ? icon : Object.assign(document.createElement('div'), { innerHTML: icon }).firstElementChild;
                const classes = (el && el.getAttribute('class') || '').split(' ');
                const faIconClass = classes.find(cls => cls.startsWith('fa-'));
                if (faIconClass) {
                    this.state.icon = faIconClass;
                    this.props.record.update({ [this.props.name]: faIconClass });
                }
            },
        });
    }
}



IconPickerField.supportedTypes = ["char"];
export const icon_picker = {component: IconPickerField};

// Register the new field in the Odoo registry
registry.category("fields").add("icon_picker", icon_picker);
