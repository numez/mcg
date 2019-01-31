mcgApp.service('TopInterpreter',
    [
        'AngularJsInterpreter',
        'AngularJs2Interpreter',
        'MaterialUiInterpreter',
        'MaterialUiNextInterpreter',
        'AndroidInterpreter',
        'MdLiteInterpreter',
        'EmberInterpreter',
        'McgInterpreter',
        'VueInterpreter',
        'FlutterInterpreter',
        function(
            AngularJsInterpreter,
            AngularJs2Interpreter,
            MaterialUiInterpreter,
            MaterialUiNextInterpreter,
            AndroidInterpreter,
            MdLiteInterpreter,
            EmberInterpreter,
            McgInterpreter,
            VueInterpreter,
            FlutterInterpreter
        ){
            this.getInterpreter = function (name)
            {
                // Depending on the format desired, fire the appropriate formater or return false
                switch (name) {
                    case "angularjs":
                        return AngularJsInterpreter;
                    case "angularjs2":
                        return AngularJs2Interpreter;
                    case "materialui":
                        return MaterialUiInterpreter;
                    case "materialuinext":
                        return MaterialUiNextInterpreter;
                    case "android":
                        return AndroidInterpreter;
                    case "md-lite":
                        return MdLiteInterpreter;
                    case "ember":
                        return EmberInterpreter;
                    case "mcg":
                        return McgInterpreter;
                    case "vue":
                        return VueInterpreter;
                    case "flutter":
                        return FlutterInterpreter;
                    default:
                        return false;
                }
            };
        }
    ]
);
