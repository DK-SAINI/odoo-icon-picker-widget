/** @odoo-module */

import { registry } from "@web/core/registry";
import { standardFieldProps } from "@web/views/fields/standard_field_props";
import { useService } from "@web/core/utils/hooks";
import { MediaDialog } from '@html_editor/main/media/media_dialog/media_dialog';
import { Component, useState, onWillUpdateProps } from "@odoo/owl";


export class IconPickerField extends Component {
    static props = { ...standardFieldProps };
    static template = "icon_picker_widget.IconPickerField";
    static supportedTypes = ["char"];


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

    /**
     * Returns the CSS classes needed to render the stored Font Awesome icon.
     */
    get iconClass() {
        const icon = this.state.icon;
        if (!icon) return '';
        return `fa ${icon} fa-lg`;
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
                const classes = (el && el.getAttribute('class') || '').split(' ').filter(c => c);
                const iconClass = classes.find(cls => cls.startsWith('fa-') && cls !== 'fa');
                if (iconClass) {
                    this.state.icon = iconClass;
                    this.props.record.update({ [this.props.name]: iconClass });
                }
            },
        });
    }
}


export const icon_picker = {component: IconPickerField};

// Register the new field in the Odoo registry
registry.category("fields").add("icon_picker", icon_picker);
