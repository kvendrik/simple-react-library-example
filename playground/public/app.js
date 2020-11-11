var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("index", ["require", "exports", "react", "react-dom", "../../"], function (require, exports, react_1, react_dom_1, __1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_1 = __importDefault(react_1);
    react_dom_1 = __importDefault(react_dom_1);
    function App() {
        return (react_1.default.createElement("main", null,
            react_1.default.createElement("h1", null, "Hello!"),
            react_1.default.createElement(__1.Button, null, "Hey!")));
    }
    var rootElement = document.getElementById("root");
    react_dom_1.default.render(react_1.default.createElement(App, null), rootElement);
});
