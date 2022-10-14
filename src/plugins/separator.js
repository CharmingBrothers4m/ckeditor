import { Plugin } from 'ckeditor5/src/core';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import {BlockToolbar, ColorGridView, StickyPanelView, TooltipManager} from "@ckeditor/ckeditor5-ui";

export class Separator extends Plugin {
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add('separator', () => {
            const button = new ButtonView();
            button.set( {
                label: 'Extra',
                withText: true
            } );

            button.on('execute', () => {
                editor.model.change(writer => {
                    editor.model.insertContent(writer.createText("<<<<<{\"title\":\"\", “color”:\"\"}>>>>>"));
                });
            });

            return button;
        });
    }
}