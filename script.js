<div id="root</div>
<script>
const { useState, createElement } = React;
function OlaMundo(props) {
const p = React.createElement("p", null,
`Olá, ${props.name}!`);
return p;
}

const root = ReactDOM.createRoot(
document.querySelector("#root"));
root.render(createElement(OlaMundo, { name: "Marco" }));
</script>