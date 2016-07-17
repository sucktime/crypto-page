﻿/**
 * Created by yihe01 on 2016/3/21.
 */
( function() {

    "use strict";

    var pluginName = 'h2';

    CKEDITOR.plugins.add( pluginName, {
        icons: pluginName, // If you wish to have an icon...

        init: function( editor ) {
            // Tagname which you'd like to apply.
            var tag = 'h2',
                // Note: that we're reusing.
                //style = new CKEDITOR.style( editor.config[ 'format_' + tag ] );
                style = new CKEDITOR.style( { element: 'h2' } );

            // Creates a command for our plugin, here command will apply style. All the logic is
            // inside CKEDITOR.styleCommand#exec function so we don't need to implement anything.
            editor.addCommand( pluginName, new CKEDITOR.styleCommand( style ) );

            // This part will provide toolbar button highlighting in editor.
            editor.attachStyleStateChange( style, function( state ) {
                !editor.readOnly && editor.getCommand( pluginName ).setState( state );
            } );

            // This will add button to the toolbar.
            editor.ui.addButton( 'H2', {
                label: '设为H2',
                command: pluginName,
                toolbar: 'insert,5'
            } );
        }
    } );

} )();