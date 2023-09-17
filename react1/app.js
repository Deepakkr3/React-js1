const ele1=React.createElement("h1",{
    id:"newid"
},"heading 1");
const ele2=React.createElement("h1",{
    id:"newid"
},"heading 2");
const container=React.createElement("div",{
    id:"container"
},[ele1,ele2]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);