(()=>{"use strict";function t(t){let e=document.querySelector("#content");t.forEach((function(o,n,c){let r=document.createElement("div");r.setAttribute("id","toDoDiv"),console.log(`toDoArr item:${t} at index:${n}`),console.log(`item.title: ${o.title}`),r.textContent=o.title+" "+o.description+" "+o.dueDate+" "+o.priority,e.appendChild(r)}))}function e(t,e){return e.push(t),e}const o=()=>{let t=document.querySelector("#content");for(;t.firstChild;)t.removeChild(t.firstChild)},n=(()=>{const n={projectA:[],projectB:[],projectC:[]},c=document.createElement("div");c.textContent="Project A";const r=document.createElement("div");r.textContent="Project B";const i=document.createElement("div");i.textContent="Project C";const l=document.querySelector("#projectList");return document.querySelector("#createToDoBtn").addEventListener("click",(function(){(o=>{const n=(()=>{let t=window.prompt("Enter title of ToDo:"),e=window.prompt("Enter description of ToDo:"),o=window.prompt("Enter due date of ToDo:"),n=window.prompt("Enter priority of ToDo:"),c=window.prompt("Enter the project you want this ToDo in:");if(""!=t&&null!=t&&""!=e&&null!=e&&""!=o&&null!=o&&""!=n&&null!=n){const r=((t,e,o,n,c)=>({title:t,description:e,dueDate:o,priority:n,location:c}))(t,e,o,n,c);return r}})();"projectA"==n.location?(e(n,o.projectA),t(o.projectA)):"projectB"==n.location?(e(n,o.projectB),t(o.projectB)):"projectC"==n.location?(e(n,o.projectC),t(o.projectC)):(e(n,o.projectA),t(o.projectA))})(n)})),c.addEventListener("click",(function(){o(),t(n.projectA)})),r.addEventListener("click",(function(){o(),t(n.projectB)})),i.addEventListener("click",(function(){o(),t(n.projectC)})),l.appendChild(c),l.appendChild(r),l.appendChild(i),{toDoList:n}})();console.log("project a: "+n.toDoList.projectA),console.log("project b:"+n.toDoList.projectB),console.log("project c:"+n.toDoList.projectC)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxhQUFlYyxFQUFTQyxTQUFTRyxXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHVzaFRvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVRvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RlUmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0ZhY3RvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyICh0b0RvQXJyKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgdG9Eb0Fyci5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGluZGV4LCBhcnJheSl7XG4gICAgICAgIGxldCB0b0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9Eb0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvRG9EaXZcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGB0b0RvQXJyIGl0ZW06JHt0b0RvQXJyfSBhdCBpbmRleDoke2luZGV4fWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgaXRlbS50aXRsZTogJHtpdGVtLnRpdGxlfWApO1xuICAgICAgICB0b0RvRGl2LnRleHRDb250ZW50ID0gaXRlbS50aXRsZSArIFwiIFwiICsgaXRlbS5kZXNjcmlwdGlvbiArIFwiIFwiICsgaXRlbS5kdWVEYXRlICsgXCIgXCIgKyBpdGVtLnByaW9yaXR5O1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9Eb0Rpdik7XG4gICAgfSk7XG4gICAgLy8gY29udGVudC5hcHBlbmRDaGlsZCh0b0RvRGl2KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwdXNoVG9EbyhpdGVtLCB0b2RvQXJyKXtcbiAgICB0b2RvQXJyLnB1c2goaXRlbSk7XG5cbiAgICByZXR1cm4gdG9kb0Fycjtcbn0iLCJpbXBvcnQge3RvZG9GYWN0b3J5fSBmcm9tICcuL3RvZG9GYWN0b3J5JztcbmltcG9ydCBwdXNoVG9EbyBmcm9tICcuL3B1c2hUb0RvJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9yZW5kZXInO1xuXG5jb25zdCBjcmVhdGVUb0RvID0gKCkgPT4ge1xuICAgIGxldCB0aXRsZSA9IHdpbmRvdy5wcm9tcHQoXCJFbnRlciB0aXRsZSBvZiBUb0RvOlwiKTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSB3aW5kb3cucHJvbXB0KFwiRW50ZXIgZGVzY3JpcHRpb24gb2YgVG9EbzpcIik7XG4gICAgbGV0IGR1ZURhdGUgPSB3aW5kb3cucHJvbXB0KFwiRW50ZXIgZHVlIGRhdGUgb2YgVG9EbzpcIik7XG4gICAgbGV0IHByaW9yaXR5ID0gd2luZG93LnByb21wdChcIkVudGVyIHByaW9yaXR5IG9mIFRvRG86XCIpO1xuICAgIGxldCBsb2NhdGlvbiA9IHdpbmRvdy5wcm9tcHQoXCJFbnRlciB0aGUgcHJvamVjdCB5b3Ugd2FudCB0aGlzIFRvRG8gaW46XCIpO1xuXG4gICAgaWYgKCh0aXRsZSA9PSBcIlwiIHx8IHRpdGxlID09IG51bGwpIHx8IChkZXNjcmlwdGlvbiA9PSBcIlwiIHx8IGRlc2NyaXB0aW9uID09IG51bGwpIHx8IChkdWVEYXRlID09IFwiXCIgfHwgZHVlRGF0ZSA9PSBudWxsKSB8fCAocHJpb3JpdHkgPT0gXCJcIiB8fCBwcmlvcml0eSA9PSBudWxsKSl7XG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0b2RvRmFjdG9yeSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBsb2NhdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxufVxuXG5jb25zdCBjcmVhdGVUb0RvQnRuID0gKHRvZG9MaXN0KSA9PiB7XG5cbiAgICBjb25zdCBpdGVtID0gY3JlYXRlVG9EbygpO1xuXG4gICAgaWYgKGl0ZW0ubG9jYXRpb24gPT0gXCJwcm9qZWN0QVwiKXtcbiAgICAgICAgcHVzaFRvRG8oaXRlbSwgdG9kb0xpc3QucHJvamVjdEEpO1xuICAgICAgICByZW5kZXIodG9kb0xpc3QucHJvamVjdEEpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2UgaWYgKGl0ZW0ubG9jYXRpb24gPT0gXCJwcm9qZWN0QlwiKXtcbiAgICAgICAgcHVzaFRvRG8oaXRlbSwgdG9kb0xpc3QucHJvamVjdEIpO1xuICAgICAgICByZW5kZXIodG9kb0xpc3QucHJvamVjdEIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2UgaWYgKGl0ZW0ubG9jYXRpb24gPT0gXCJwcm9qZWN0Q1wiKXtcbiAgICAgICAgcHVzaFRvRG8oaXRlbSwgdG9kb0xpc3QucHJvamVjdEMpO1xuICAgICAgICByZW5kZXIodG9kb0xpc3QucHJvamVjdEMpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwdXNoVG9EbyhpdGVtLCB0b2RvTGlzdC5wcm9qZWN0QSk7XG4gICAgICAgIHJlbmRlcih0b2RvTGlzdC5wcm9qZWN0QSk7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIGNyZWF0ZVRvRG8sXG4gICAgY3JlYXRlVG9Eb0J0blxufTsiLCJjb25zdCBkZVJlbmRlciA9ICgpID0+IHtcbiAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgZGVSZW5kZXIgfTsiLCJpbXBvcnQgcmVuZGVyIGZyb20gJy4vcmVuZGVyJztcbmltcG9ydCB7Y3JlYXRlVG9Eb0J0bn0gZnJvbSAnLi9jcmVhdGVUb0RvJztcbmltcG9ydCB7ZGVSZW5kZXJ9IGZyb20gJy4vZGVSZW5kZXInO1xuXG5jb25zdCB0b0RvRmxvdyA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCB0b0RvTGlzdCA9IHtcbiAgICAgICAgcHJvamVjdEE6IFtdLFxuICAgICAgICBwcm9qZWN0QjogW10sXG4gICAgICAgIHByb2plY3RDOiBbXSxcbiAgICB9O1xuXG4gICAgY29uc3QgcHJvamVjdEEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0QS50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBBXCI7XG4gICAgY29uc3QgcHJvamVjdEIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Qi50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBCXCI7XG4gICAgY29uc3QgcHJvamVjdEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Qy50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBDXCI7XG5cbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdExpc3RcIik7XG5cbiAgICBjb25zdCB0b0RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGVUb0RvQnRuXCIpO1xuXG5cbiAgICB0b0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgY3JlYXRlVG9Eb0J0bih0b0RvTGlzdCk7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0QS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGRlUmVuZGVyKCk7XG4gICAgICAgIHJlbmRlcih0b0RvTGlzdC5wcm9qZWN0QSk7XG4gICAgfSk7XG4gICAgcHJvamVjdEIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBkZVJlbmRlcigpO1xuICAgICAgICByZW5kZXIodG9Eb0xpc3QucHJvamVjdEIpO1xuICAgIH0pO1xuICAgIHByb2plY3RDLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgZGVSZW5kZXIoKTtcbiAgICAgICAgcmVuZGVyKHRvRG9MaXN0LnByb2plY3RDKTtcbiAgICB9KTtcblxuXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEEpO1xuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RCKTtcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0Qyk7XG5cblxuXG5cblxuXG4gICAgcmV0dXJuIHsgdG9Eb0xpc3QgfTtcbn0pKCk7XG5cbi8vIGNvbnNvbGUubG9nKHRvZG9GbG93Lml0ZW0pO1xuLy8gY29uc29sZS5sb2codG9kb0Zsb3cudG9Eb0Fycik7XG5jb25zb2xlLmxvZyhcInByb2plY3QgYTogXCIgKyB0b0RvRmxvdy50b0RvTGlzdC5wcm9qZWN0QSk7XG5jb25zb2xlLmxvZyhcInByb2plY3QgYjpcIiArIHRvRG9GbG93LnRvRG9MaXN0LnByb2plY3RCKTtcbmNvbnNvbGUubG9nKFwicHJvamVjdCBjOlwiICsgdG9Eb0Zsb3cudG9Eb0xpc3QucHJvamVjdEMpOyIsImNvbnN0IHRvZG9GYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGxvY2F0aW9uKSA9PiB7XG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBsb2NhdGlvbn07XG59O1xuXG5leHBvcnQge3RvZG9GYWN0b3J5fTsiXSwibmFtZXMiOlsicmVuZGVyIiwidG9Eb0FyciIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwiYXJyYXkiLCJ0b0RvRGl2IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsInRleHRDb250ZW50IiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJhcHBlbmRDaGlsZCIsInB1c2hUb0RvIiwidG9kb0FyciIsInB1c2giLCJkZVJlbmRlciIsInBhcmVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInRvRG9GbG93IiwidG9Eb0xpc3QiLCJwcm9qZWN0QSIsInByb2plY3RCIiwicHJvamVjdEMiLCJwcm9qZWN0TGlzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2RvTGlzdCIsIndpbmRvdyIsInByb21wdCIsImxvY2F0aW9uIiwidG9kb0ZhY3RvcnkiLCJjcmVhdGVUb0RvIiwiY3JlYXRlVG9Eb0J0biJdLCJzb3VyY2VSb290IjoiIn0=