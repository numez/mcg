mcgApp.service('FlutterInterpreter', function () {
    this.export = function(exportObj, theme, single)
    {
        this.code = '';
        this.exportObj = exportObj;
        this.theme = theme;
        this.single = single;
        this.buildExport();
        return this.code;
    };

    /*
     * Flutter
     * Material 2 Formatting Functions
     */
    this.buildExport = function () {
        var themeCodeString = '/* For use in material-ui/src/styles/colors.js */\n';
        if (this.single === true) {
            // Generate palette's code
            themeCodeString = this.createFlutterPaletteCode(this.exportObj);
        } else {
            // For each palette, add it's declaration
            for (var i = 0; i < this.exportObj.length; i++) {
                themeCodeString = themeCodeString + this.createFlutterPaletteCode(this.exportObj[i]);
            }
        }

        this.code = themeCodeString;
    };

    this.createFlutterPaletteCode = function (palette) {
        var code = '';

        // Generate base colors
        code += 'static const MaterialColor ' + palette.name + ' = MaterialColor(\n0xFF' + palette.colors[5];
        code += '\n<int, Color>{';
        angular.forEach(palette.colors, function (value, key) {
            code += "    " + value.name + ": Color(0xFF" + tinycolor(value.hex).toHexString() + '),\n';
        });

        if (palette.colors[5].darkContrast) {
            var contrast = 'dark';
        } else {
            var contrast = 'light';
        }

        code += '},\n';

        code += ');\n\n';

        return code;
    };

});
