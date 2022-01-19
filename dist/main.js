(()=>{"use strict";const t=()=>{let t=document.querySelector("#content");for(;t.firstChild;)t.removeChild(t.firstChild)},e=()=>{let t=document.querySelector("#bodyTitle");for(;t.firstChild;)t.removeChild(t.firstChild)},o=t=>{e();const o=document.querySelector("#bodyTitle"),n=document.createElement("div");n.classList.add("title1");const i=document.createElement("div");i.classList.add("title2"),i.textContent="Due Date",""==t||null==t?(n.textContent="Default",o.appendChild(n)):(n.textContent=t,o.appendChild(n)),o.appendChild(i)};function n(t){let e=document.querySelector("#content");t.forEach((function(o,n,i){let d=document.createElement("div");d.setAttribute("id",`toDoDiv${n}`),d.classList.add("toDoDiv");let l=document.createElement("div");l.classList.add("titleDiv");let r=document.createElement("div");r.setAttribute("id","descDiv"),r.classList.add("invisibleDesc");let c=document.createElement("div");c.classList.add("dueDiv");let s=document.createElement("div");"high"==o.priority?s.classList.add("highPriority"):"medium"==o.priority?s.classList.add("mediumPriority"):s.classList.add("lowPriority");let a=document.createElement("input");a.type="checkbox",a.addEventListener("click",(function(){o.toggle()}));let u=1;l.addEventListener("click",(function(){u%2!=0?(r.classList.remove("invisibleDesc"),r.contentEditable=!0,u+=1):(r.classList.add("invisibleDesc"),u+=1)}));let p=((t,e)=>{let o=document.createElement("div");return o.classList.add("removeBtn"),o.textContent="X",o.addEventListener("click",(function(){t.splice(e,1),document.getElementById(`toDoDiv${e}`).remove()})),o})(t,n);l.textContent=o.title,r.textContent=o.description,c.textContent=o.dueDate,d.appendChild(s),d.appendChild(a),d.appendChild(l),d.appendChild(r),d.appendChild(c),d.appendChild(p),e.appendChild(d)}))}function i(t,e){return e.push(t),e}const d=(()=>{const d={defaultProj:[]};return o(),(i=>{const d=document.createElement("div");d.classList.add("newProj"),d.textContent="Default";const l=document.querySelector("#projectList");d.addEventListener("click",(function(){t(),n(i.defaultProj),e(),o()})),l.appendChild(d)})(d),(e=>{document.querySelector("#createToDoBtn").addEventListener("click",(function(){(e=>{const d=(()=>{let t=window.prompt("Enter title of ToDo:"),e=window.prompt("Enter description of ToDo:"),o=window.prompt("Enter due date of ToDo:"),n=window.prompt("Enter priority of ToDo(High, Medium, or Low):");n=n.toLowerCase();let i=window.prompt("Enter the project you want this ToDo in:");if(i=i.toLowerCase(),""!=t&&null!=t&&""!=e&&null!=e&&""!=o&&null!=o&&""!=n&&null!=n){const d=((t,e,o,n,i,d=!1)=>{let l={title:t,description:e,dueDate:o,priority:n,location:i,isComplete:d};return{get title(){return l.title},get description(){return l.description},get dueDate(){return l.dueDate},get priority(){return l.priority},get location(){return l.location},get isComplete(){return l.isComplete},toggle(){l.isComplete=!l.isComplete}}})(t,e,o,n,i);return d}})();"default"==d.location||""==d.location||null==d.location?(i(d,e.defaultProj),t(),n(e.defaultProj),o("Default")):(i(d,e[d.location]),t(),n(e[d.location]),o(d.location))})(e)}))})(d),document.querySelector("#createProjectBtn").addEventListener("click",(function(){(i=>{const d=document.querySelector("#projectList"),l=document.createElement("div");l.classList.add("newProj");const r=window.prompt("Enter name of project:");let c=r.toLowerCase();l.textContent=r,i[c]=[],l.addEventListener("click",(function(d){t(),n(i[c]),e(),o(r)})),d.appendChild(l)})(d)})),{toDoList:d}})();console.log("project a: "+d.toDoList.defaultProj)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsTUFBTUEsRUFBVyxLQUNiLElBQUlDLEVBQVNDLFNBQVNDLGNBQWMsWUFDcEMsS0FBT0YsRUFBT0csWUFDVkgsRUFBT0ksWUFBWUosRUFBT0csYUFJNUJFLEVBQWdCLEtBQ2xCLElBQUlMLEVBQVNDLFNBQVNDLGNBQWMsY0FDcEMsS0FBT0YsRUFBT0csWUFDVkgsRUFBT0ksWUFBWUosRUFBT0csYUNQNUJHLEVBQWlCQyxJQUVuQkYsSUFFQSxNQUFNRyxFQUFZUCxTQUFTQyxjQUFjLGNBRW5DTyxFQUFTUixTQUFTUyxjQUFjLE9BQ3RDRCxFQUFPRSxVQUFVQyxJQUFJLFVBQ3JCLE1BQU1DLEVBQVNaLFNBQVNTLGNBQWMsT0FDdENHLEVBQU9GLFVBQVVDLElBQUksVUFDckJDLEVBQU9DLFlBQWMsV0FHRixJQUFmUCxHQUFvQyxNQUFmQSxHQUVyQkUsRUFBT0ssWUFBYyxVQUNyQk4sRUFBVU8sWUFBWU4sS0FLdEJBLEVBQU9LLFlBQWNQLEVBRXJCQyxFQUFVTyxZQUFZTixJQUkxQkQsRUFBVU8sWUFBWUYsSUM1QlgsU0FBU0csRUFBUUMsR0FDNUIsSUFBSUMsRUFBVWpCLFNBQVNDLGNBQWMsWUFDckNlLEVBQVFFLFNBQVEsU0FBU0MsRUFBTUMsRUFBT0MsR0FDbEMsSUFBSUMsRUFBVXRCLFNBQVNTLGNBQWMsT0FDckNhLEVBQVFDLGFBQWEsS0FBTSxVQUFVSCxLQUNyQ0UsRUFBUVosVUFBVUMsSUFBSSxXQUV0QixJQUFJYSxFQUFXeEIsU0FBU1MsY0FBYyxPQUN0Q2UsRUFBU2QsVUFBVUMsSUFBSSxZQUV2QixJQUFJYyxFQUFVekIsU0FBU1MsY0FBYyxPQUNyQ2dCLEVBQVFGLGFBQWEsS0FBTSxXQUMzQkUsRUFBUWYsVUFBVUMsSUFBSSxpQkFFdEIsSUFBSWUsRUFBUzFCLFNBQVNTLGNBQWMsT0FDcENpQixFQUFPaEIsVUFBVUMsSUFBSSxVQUVyQixJQUFJZ0IsRUFBYzNCLFNBQVNTLGNBQWMsT0FFcEIsUUFBakJVLEVBQUtTLFNBQ0xELEVBQVlqQixVQUFVQyxJQUFJLGdCQUVKLFVBQWpCUSxFQUFLUyxTQUNWRCxFQUFZakIsVUFBVUMsSUFBSSxrQkFHMUJnQixFQUFZakIsVUFBVUMsSUFBSSxlQUc5QixJQUFJa0IsRUFBWTdCLFNBQVNTLGNBQWMsU0FDdkNvQixFQUFVQyxLQUFPLFdBRWpCRCxFQUFVRSxpQkFBaUIsU0FBUyxXQUNoQ1osRUFBS2EsWUFJVCxJQUFJQyxFQUFRLEVBQ1pULEVBQVNPLGlCQUFpQixTQUFTLFdBRTNCRSxFQUFRLEdBQUssR0FDYlIsRUFBUWYsVUFBVXdCLE9BQU8saUJBQ3pCVCxFQUFRVSxpQkFBa0IsRUFDMUJGLEdBQVMsSUFHVFIsRUFBUWYsVUFBVUMsSUFBSSxpQkFDdEJzQixHQUFTLE1BS2pCLElBQUlHLEVDckRPLEVBQUNwQixFQUFTSSxLQUN6QixJQUFJZ0IsRUFBWXBDLFNBQVNTLGNBQWMsT0FTdkMsT0FSQTJCLEVBQVUxQixVQUFVQyxJQUFJLGFBQ3hCeUIsRUFBVXZCLFlBQWMsSUFFeEJ1QixFQUFVTCxpQkFBaUIsU0FBUyxXQUNoQ2YsRUFBUXFCLE9BQU9qQixFQUFPLEdBQ3RCcEIsU0FBU3NDLGVBQWUsVUFBVWxCLEtBQVNjLFlBR3hDRSxHRDJDYUcsQ0FBV3ZCLEVBQVNJLEdBRXBDSSxFQUFTWCxZQUFjTSxFQUFLcUIsTUFDNUJmLEVBQVFaLFlBQWNNLEVBQUtzQixZQUMzQmYsRUFBT2IsWUFBY00sRUFBS3VCLFFBRTFCcEIsRUFBUVIsWUFBWWEsR0FDcEJMLEVBQVFSLFlBQVllLEdBQ3BCUCxFQUFRUixZQUFZVSxHQUNwQkYsRUFBUVIsWUFBWVcsR0FDcEJILEVBQVFSLFlBQVlZLEdBQ3BCSixFQUFRUixZQUFZc0IsR0FPcEJuQixFQUFRSCxZQUFZUSxNRXhFYixTQUFTcUIsRUFBU3hCLEVBQU15QixHQUduQyxPQUZBQSxFQUFRQyxLQUFLMUIsR0FFTnlCLEVDR1gsTUNETUUsRUFBVyxNQUViLE1BQU1DLEVBQVcsQ0FDYkMsWUFBYSxJQW9CakIsT0FqQkEzQyxJQ1BnQixDQUFDMEMsSUFFakIsTUFBTUMsRUFBY2hELFNBQVNTLGNBQWMsT0FDM0N1QyxFQUFZdEMsVUFBVUMsSUFBSSxXQUMxQnFDLEVBQVluQyxZQUFjLFVBRTFCLE1BQU1vQyxFQUFjakQsU0FBU0MsY0FBYyxnQkFFM0MrQyxFQUFZakIsaUJBQWlCLFNBQVMsV0FDbENqQyxJQUNBaUIsRUFBT2dDLEVBQVNDLGFBQ2hCNUMsSUFDQUMsT0FJSjRDLEVBQVluQyxZQUFZa0MsSURQeEJBLENBQVlELEdFWEEsQ0FBQ0EsSUFDRy9DLFNBQVNDLGNBQWMsa0JBRy9COEIsaUJBQWlCLFNBQVMsV0htQmhCLENBQUNtQixJQUVuQixNQUFNL0IsRUFyQlMsTUFDZixJQUFJcUIsRUFBUVcsT0FBT0MsT0FBTyx3QkFDdEJYLEVBQWNVLE9BQU9DLE9BQU8sOEJBQzVCVixFQUFVUyxPQUFPQyxPQUFPLDJCQUN4QnhCLEVBQVd1QixPQUFPQyxPQUFPLGlEQUM3QnhCLEVBQVdBLEVBQVN5QixjQUNwQixJQUFJQyxFQUFXSCxPQUFPQyxPQUFPLDRDQUc3QixHQUZBRSxFQUFXQSxFQUFTRCxjQUVOLElBQVRiLEdBQXdCLE1BQVRBLEdBQWtDLElBQWZDLEdBQW9DLE1BQWZBLEdBQW9DLElBQVhDLEdBQTRCLE1BQVhBLEdBQWlDLElBQVpkLEdBQThCLE1BQVpBLEVBR3hJLENBQ0QsTUFBTVQsRUluQk0sRUFBQ3FCLEVBQU9DLEVBQWFDLEVBQVNkLEVBQVUwQixFQUFVQyxHQUFZLEtBRTlFLElBQUlDLEVBQVEsQ0FDUmhCLE1BQUFBLEVBQ0FDLFlBQUFBLEVBQ0FDLFFBQUFBLEVBQ0FkLFNBQUFBLEVBQ0EwQixTQUFBQSxFQUNBQyxXQUFBQSxHQUdKLE1BQU8sQ0FDQ2YsWUFBUyxPQUFPZ0IsRUFBTWhCLE9BQ3RCQyxrQkFBZSxPQUFPZSxFQUFNZixhQUM1QkMsY0FBVyxPQUFPYyxFQUFNZCxTQUN4QmQsZUFBWSxPQUFPNEIsRUFBTTVCLFVBQ3pCMEIsZUFBWSxPQUFPRSxFQUFNRixVQUN6QkMsaUJBQWMsT0FBT0MsRUFBTUQsWUFDL0J2QixTQUFVd0IsRUFBTUQsWUFBY0MsRUFBTUQsY0pDdkJFLENBQVlqQixFQUFPQyxFQUFhQyxFQUFTZCxFQUFVMEIsR0FFaEUsT0FBT25DLElBTUV1QyxHQUVRLFdBQWpCdkMsRUFBS21DLFVBQTBDLElBQWpCbkMsRUFBS21DLFVBQW1DLE1BQWpCbkMsRUFBS21DLFVBQzFEWCxFQUFTeEIsRUFBTStCLEVBQVNGLGFBQ3hCbEQsSUFDQWlCLEVBQU9tQyxFQUFTRixhQUNoQjNDLEVBQWMsYUFJZHNDLEVBQVN4QixFQUFNK0IsRUFBUy9CLEVBQUttQyxXQUM3QnhELElBQ0FpQixFQUFPbUMsRUFBUy9CLEVBQUttQyxXQUNyQmpELEVBQWNjLEVBQUttQyxZR2pDbkJLLENBQWNaLE9GUWxCYSxDQUFRYixHQUVXL0MsU0FBU0MsY0FBYyxxQkFFL0I4QixpQkFBaUIsU0FBUyxXSWZ0QixDQUFDZ0IsSUFDaEIsTUFBTWMsRUFBVzdELFNBQVNDLGNBQWMsZ0JBQ2xDNkQsRUFBVTlELFNBQVNTLGNBQWMsT0FDdkNxRCxFQUFRcEQsVUFBVUMsSUFBSSxXQUV0QixNQUFNTCxFQUFjNkMsT0FBT0MsT0FBTywwQkFDbEMsSUFBSVcsRUFBZXpELEVBQVkrQyxjQUUvQlMsRUFBUWpELFlBQWNQLEVBRXRCeUMsRUFBU2dCLEdBQWdCLEdBS3pCRCxFQUFRL0IsaUJBQWlCLFNBQVMsU0FBU2lDLEdBQ3ZDbEUsSUFDQWlCLEVBQU9nQyxFQUFTZ0IsSUFDaEIzRCxJQUNBQyxFQUFjQyxNQUdsQnVELEVBQVMvQyxZQUFZZ0QsSUpOakJHLENBQVdsQixNQVFSLENBQUVBLFNBQUFBLElBdkJJLEdBNEJqQm1CLFFBQVFDLElBQUksY0FBZ0JyQixFQUFTQyxTQUFTQyxjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RlUmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9nZW5lcmF0ZVRpdGxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbW92ZVRvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3B1c2hUb0RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVUb0RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGVmYXVsdFByb2ouanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvRG9CdG4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9GYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlUmVuZGVyID0gKCkgPT4ge1xuICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5jb25zdCBkZVJlbmRlclRpdGxlID0gKCkgPT4ge1xuICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvZHlUaXRsZVwiKTtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgZGVSZW5kZXIsXG4gICAgZGVSZW5kZXJUaXRsZVxufTsiLCJpbXBvcnQgeyBkZVJlbmRlclRpdGxlIH0gZnJvbSBcIi4vZGVSZW5kZXJcIjtcblxuXG5jb25zdCBnZW5lcmF0ZVRpdGxlID0gKHByb2plY3ROYW1lKSA9PiB7XG5cbiAgICBkZVJlbmRlclRpdGxlKCk7XG5cbiAgICBjb25zdCBib2R5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9keVRpdGxlJyk7XG5cbiAgICBjb25zdCB0aXRsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZTEuY2xhc3NMaXN0LmFkZCgndGl0bGUxJyk7XG4gICAgY29uc3QgdGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlMicpO1xuICAgIHRpdGxlMi50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcblxuXG4gICAgaWYgKHByb2plY3ROYW1lID09IFwiXCIgfHwgcHJvamVjdE5hbWUgPT0gbnVsbCl7XG5cbiAgICAgICAgdGl0bGUxLnRleHRDb250ZW50ID0gXCJEZWZhdWx0XCI7XG4gICAgICAgIGJvZHlUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZTEpO1xuXG4gICAgfVxuICAgIGVsc2Uge1xuXG4gICAgICAgIHRpdGxlMS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuXG4gICAgICAgIGJvZHlUaXRsZS5hcHBlbmRDaGlsZCh0aXRsZTEpO1xuXG4gICAgfVxuXG4gICAgYm9keVRpdGxlLmFwcGVuZENoaWxkKHRpdGxlMik7XG59XG5cblxuZXhwb3J0IHsgZ2VuZXJhdGVUaXRsZSB9IiwiaW1wb3J0IHsgcmVtb3ZlVG9EbyB9IGZyb20gXCIuL3JlbW92ZVRvRG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyICh0b0RvQXJyKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgdG9Eb0Fyci5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGluZGV4LCBhcnJheSl7XG4gICAgICAgIGxldCB0b0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9Eb0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRvRG9EaXYke2luZGV4fWApO1xuICAgICAgICB0b0RvRGl2LmNsYXNzTGlzdC5hZGQoJ3RvRG9EaXYnKTtcblxuICAgICAgICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0aXRsZURpdicpO1xuXG4gICAgICAgIGxldCBkZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGVzY0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NEaXYnKTtcbiAgICAgICAgZGVzY0Rpdi5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGVEZXNjJyk7XG5cbiAgICAgICAgbGV0IGR1ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGR1ZURpdi5jbGFzc0xpc3QuYWRkKCdkdWVEaXYnKTtcblxuICAgICAgICBsZXQgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgaXRlbS5wcmlvcml0eSA9ICR7aXRlbS5wcmlvcml0eX1gKTtcbiAgICAgICAgaWYgKGl0ZW0ucHJpb3JpdHkgPT0gXCJoaWdoXCIpe1xuICAgICAgICAgICAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZCgnaGlnaFByaW9yaXR5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXRlbS5wcmlvcml0eSA9PSBcIm1lZGl1bVwiKXtcbiAgICAgICAgICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ21lZGl1bVByaW9yaXR5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdsb3dQcmlvcml0eScpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRvZ2dsZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdG9nZ2xlQm94LnR5cGUgPSAnY2hlY2tib3gnO1xuXG4gICAgICAgIHRvZ2dsZUJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpdGVtLnRvZ2dsZSgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGl0ZW0uaXNDb21wbGV0ZTogJHtpdGVtLmlzQ29tcGxldGV9YCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjb3VudCA9IDE7XG4gICAgICAgIHRpdGxlRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgaWYgKGNvdW50ICUgMiAhPSAwKXtcbiAgICAgICAgICAgICAgICBkZXNjRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZURlc2MnKTtcbiAgICAgICAgICAgICAgICBkZXNjRGl2LmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlc2NEaXYuY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlRGVzYycpO1xuICAgICAgICAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHJlbW92ZUJ0biA9IHJlbW92ZVRvRG8odG9Eb0FyciwgaW5kZXgpO1xuXG4gICAgICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgICAgICAgZGVzY0Rpdi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgIGR1ZURpdi50ZXh0Q29udGVudCA9IGl0ZW0uZHVlRGF0ZTtcblxuICAgICAgICB0b0RvRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcbiAgICAgICAgdG9Eb0Rpdi5hcHBlbmRDaGlsZCh0b2dnbGVCb3gpO1xuICAgICAgICB0b0RvRGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcbiAgICAgICAgdG9Eb0Rpdi5hcHBlbmRDaGlsZChkZXNjRGl2KTtcbiAgICAgICAgdG9Eb0Rpdi5hcHBlbmRDaGlsZChkdWVEaXYpO1xuICAgICAgICB0b0RvRGl2LmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XG5cbiAgICAgICAgLy8gdG9Eb0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvRG9EaXZcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGB0b0RvQXJyIGl0ZW06JHt0b0RvQXJyfSBhdCBpbmRleDoke2luZGV4fWApO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgaXRlbS50aXRsZTogJHtpdGVtLnRpdGxlfWApO1xuICAgICAgICAvLyB0b0RvRGl2LnRleHRDb250ZW50ID0gaXRlbS50aXRsZSArIFwiIFwiICsgaXRlbS5kZXNjcmlwdGlvbiArIFwiIFwiICsgaXRlbS5kdWVEYXRlICsgXCIgXCIgKyBpdGVtLnByaW9yaXR5O1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9Eb0Rpdik7XG4gICAgfSk7XG4gICAgLy8gY29udGVudC5hcHBlbmRDaGlsZCh0b0RvRGl2KTtcbn0iLCJcbmNvbnN0IHJlbW92ZVRvRG8gPSAodG9Eb0FyciwgaW5kZXgpID0+IHtcbiAgICBsZXQgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlQnRuJyk7XG4gICAgcmVtb3ZlQnRuLnRleHRDb250ZW50ID0gJ1gnO1xuXG4gICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgdG9Eb0Fyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdG9Eb0RpdiR7aW5kZXh9YCkucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVtb3ZlQnRuO1xufVxuXG5leHBvcnQgeyByZW1vdmVUb0RvIH07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHVzaFRvRG8oaXRlbSwgdG9kb0Fycil7XG4gICAgdG9kb0Fyci5wdXNoKGl0ZW0pO1xuXG4gICAgcmV0dXJuIHRvZG9BcnI7XG59IiwiaW1wb3J0IHt0b2RvRmFjdG9yeX0gZnJvbSAnLi90b2RvRmFjdG9yeSc7XG5pbXBvcnQgcHVzaFRvRG8gZnJvbSAnLi9wdXNoVG9Ebyc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vcmVuZGVyJztcbmltcG9ydCB7IGRlUmVuZGVyIH0gZnJvbSAnLi9kZVJlbmRlcic7XG5pbXBvcnQgeyBnZW5lcmF0ZVRpdGxlIH0gZnJvbSAnLi9nZW5lcmF0ZVRpdGxlJztcblxuY29uc3QgY3JlYXRlVG9EbyA9ICgpID0+IHtcbiAgICBsZXQgdGl0bGUgPSB3aW5kb3cucHJvbXB0KFwiRW50ZXIgdGl0bGUgb2YgVG9EbzpcIik7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gd2luZG93LnByb21wdChcIkVudGVyIGRlc2NyaXB0aW9uIG9mIFRvRG86XCIpO1xuICAgIGxldCBkdWVEYXRlID0gd2luZG93LnByb21wdChcIkVudGVyIGR1ZSBkYXRlIG9mIFRvRG86XCIpO1xuICAgIGxldCBwcmlvcml0eSA9IHdpbmRvdy5wcm9tcHQoXCJFbnRlciBwcmlvcml0eSBvZiBUb0RvKEhpZ2gsIE1lZGl1bSwgb3IgTG93KTpcIik7XG4gICAgcHJpb3JpdHkgPSBwcmlvcml0eS50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBsb2NhdGlvbiA9IHdpbmRvdy5wcm9tcHQoXCJFbnRlciB0aGUgcHJvamVjdCB5b3Ugd2FudCB0aGlzIFRvRG8gaW46XCIpO1xuICAgIGxvY2F0aW9uID0gbG9jYXRpb24udG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICgodGl0bGUgPT0gXCJcIiB8fCB0aXRsZSA9PSBudWxsKSB8fCAoZGVzY3JpcHRpb24gPT0gXCJcIiB8fCBkZXNjcmlwdGlvbiA9PSBudWxsKSB8fCAoZHVlRGF0ZSA9PSBcIlwiIHx8IGR1ZURhdGUgPT0gbnVsbCkgfHwgKHByaW9yaXR5ID09IFwiXCIgfHwgcHJpb3JpdHkgPT0gbnVsbCkpe1xuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBpdGVtID0gdG9kb0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbG9jYXRpb24pO1xuXG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlVG9Eb0J0biA9ICh0b2RvTGlzdCkgPT4ge1xuXG4gICAgY29uc3QgaXRlbSA9IGNyZWF0ZVRvRG8oKTtcblxuICAgIGlmIChpdGVtLmxvY2F0aW9uID09IFwiZGVmYXVsdFwiIHx8IGl0ZW0ubG9jYXRpb24gPT0gXCJcIiB8fCBpdGVtLmxvY2F0aW9uID09IG51bGwpe1xuICAgICAgICBwdXNoVG9EbyhpdGVtLCB0b2RvTGlzdC5kZWZhdWx0UHJvaik7XG4gICAgICAgIGRlUmVuZGVyKCk7XG4gICAgICAgIHJlbmRlcih0b2RvTGlzdC5kZWZhdWx0UHJvaik7XG4gICAgICAgIGdlbmVyYXRlVGl0bGUoXCJEZWZhdWx0XCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwdXNoVG9EbyhpdGVtLCB0b2RvTGlzdFtpdGVtLmxvY2F0aW9uXSk7XG4gICAgICAgIGRlUmVuZGVyKCk7XG4gICAgICAgIHJlbmRlcih0b2RvTGlzdFtpdGVtLmxvY2F0aW9uXSk7XG4gICAgICAgIGdlbmVyYXRlVGl0bGUoaXRlbS5sb2NhdGlvbik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVUb0RvLFxuICAgIGNyZWF0ZVRvRG9CdG5cbn07IiwiaW1wb3J0IHtjcmVhdGVQcm9qfSBmcm9tICcuL2NyZWF0ZVByb2plY3QnO1xuaW1wb3J0IHtkZWZhdWx0UHJvan0gZnJvbSAnLi9kZWZhdWx0UHJvaic7XG5pbXBvcnQge3RvRG9CdG59IGZyb20gJy4vdG9Eb0J0bic7XG5pbXBvcnQgeyBnZW5lcmF0ZVRpdGxlIH0gZnJvbSAnLi9nZW5lcmF0ZVRpdGxlJztcblxuY29uc3QgdG9Eb0Zsb3cgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgdG9Eb0xpc3QgPSB7XG4gICAgICAgIGRlZmF1bHRQcm9qOiBbXSxcbiAgICB9O1xuXG4gICAgZ2VuZXJhdGVUaXRsZSgpO1xuXG4gICAgZGVmYXVsdFByb2oodG9Eb0xpc3QpO1xuXG4gICAgdG9Eb0J0bih0b0RvTGlzdCk7XG5cbiAgICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGVQcm9qZWN0QnRuXCIpO1xuXG4gICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNyZWF0ZVByb2oodG9Eb0xpc3QpO1xuICAgIH0pXG5cblxuXG5cblxuXG4gICAgcmV0dXJuIHsgdG9Eb0xpc3QgfTtcbn0pKCk7XG5cbi8vIGNvbnNvbGUubG9nKHRvZG9GbG93Lml0ZW0pO1xuLy8gY29uc29sZS5sb2codG9Eb0Zsb3cudG9Eb0xpc3QpO1xuY29uc29sZS5sb2coXCJwcm9qZWN0IGE6IFwiICsgdG9Eb0Zsb3cudG9Eb0xpc3QuZGVmYXVsdFByb2opOyIsImltcG9ydCB7IGRlUmVuZGVyLCBkZVJlbmRlclRpdGxlIH0gZnJvbSBcIi4vZGVSZW5kZXJcIjtcbmltcG9ydCB7IGdlbmVyYXRlVGl0bGUgfSBmcm9tIFwiLi9nZW5lcmF0ZVRpdGxlXCI7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL3JlbmRlclwiO1xuXG5jb25zdCBkZWZhdWx0UHJvaiA9ICh0b0RvTGlzdCkgPT4ge1xuXG4gICAgY29uc3QgZGVmYXVsdFByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWZhdWx0UHJvai5jbGFzc0xpc3QuYWRkKCduZXdQcm9qJyk7XG4gICAgZGVmYXVsdFByb2oudGV4dENvbnRlbnQgPSBcIkRlZmF1bHRcIjtcblxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TGlzdFwiKTtcblxuICAgIGRlZmF1bHRQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgZGVSZW5kZXIoKTtcbiAgICAgICAgcmVuZGVyKHRvRG9MaXN0LmRlZmF1bHRQcm9qKTtcbiAgICAgICAgZGVSZW5kZXJUaXRsZSgpO1xuICAgICAgICBnZW5lcmF0ZVRpdGxlKCk7XG5cbiAgICB9KTtcblxuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKGRlZmF1bHRQcm9qKTtcbn1cblxuZXhwb3J0IHsgZGVmYXVsdFByb2ogfSIsImltcG9ydCB7Y3JlYXRlVG9Eb0J0bn0gZnJvbSAnLi9jcmVhdGVUb0RvJztcblxuY29uc3QgdG9Eb0J0biA9ICh0b0RvTGlzdCkgPT4ge1xuICAgIGNvbnN0IHRvRG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZVRvRG9CdG5cIik7XG5cblxuICAgIHRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBjcmVhdGVUb0RvQnRuKHRvRG9MaXN0KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgdG9Eb0J0biB9IiwiY29uc3QgdG9kb0ZhY3RvcnkgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbG9jYXRpb24sIGlzQ29tcGxldGU9IGZhbHNlKSA9PiB7XG5cbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICBpc0NvbXBsZXRlLFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCB0aXRsZSgpeyByZXR1cm4gc3RhdGUudGl0bGU7fSxcbiAgICAgICAgZ2V0IGRlc2NyaXB0aW9uKCl7IHJldHVybiBzdGF0ZS5kZXNjcmlwdGlvbjt9LFxuICAgICAgICBnZXQgZHVlRGF0ZSgpeyByZXR1cm4gc3RhdGUuZHVlRGF0ZTt9LFxuICAgICAgICBnZXQgcHJpb3JpdHkoKXsgcmV0dXJuIHN0YXRlLnByaW9yaXR5O30sXG4gICAgICAgIGdldCBsb2NhdGlvbigpeyByZXR1cm4gc3RhdGUubG9jYXRpb247fSxcbiAgICAgICAgZ2V0IGlzQ29tcGxldGUoKXsgcmV0dXJuIHN0YXRlLmlzQ29tcGxldGU7fSxcbiAgICAgICAgdG9nZ2xlKCl7IHN0YXRlLmlzQ29tcGxldGUgPSAhc3RhdGUuaXNDb21wbGV0ZTt9XG4gICAgfTtcbn07XG5cbmV4cG9ydCB7dG9kb0ZhY3Rvcnl9OyIsImltcG9ydCB7IGRlUmVuZGVyLCBkZVJlbmRlclRpdGxlIH0gZnJvbSBcIi4vZGVSZW5kZXJcIjtcbmltcG9ydCB7IGdlbmVyYXRlVGl0bGUgfSBmcm9tIFwiLi9nZW5lcmF0ZVRpdGxlXCI7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL3JlbmRlclwiO1xuXG5jb25zdCBjcmVhdGVQcm9qID0gKHRvRG9MaXN0KSA9PiB7XG4gICAgY29uc3QgcHJvakxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RMaXN0XCIpO1xuICAgIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdQcm9qLmNsYXNzTGlzdC5hZGQoJ25ld1Byb2onKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gd2luZG93LnByb21wdChcIkVudGVyIG5hbWUgb2YgcHJvamVjdDpcIik7XG4gICAgbGV0IGZpbHRlcmVkTmFtZSA9IHByb2plY3ROYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBuZXdQcm9qLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG5cbiAgICB0b0RvTGlzdFtmaWx0ZXJlZE5hbWVdID0gW107XG4gICAgXG5cbiAgICAvLyBuZXdQcm9qIGFyZSBwcm9qZWN0cyBpbiB0aGUgbGlzdCB1c2VycyBjYW4gY2xpY2sgdG8gdmlldyBUb0Rvc1xuXG4gICAgbmV3UHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBkZVJlbmRlcigpO1xuICAgICAgICByZW5kZXIodG9Eb0xpc3RbZmlsdGVyZWROYW1lXSk7XG4gICAgICAgIGRlUmVuZGVyVGl0bGUoKTtcbiAgICAgICAgZ2VuZXJhdGVUaXRsZShwcm9qZWN0TmFtZSk7XG4gICAgfSlcblxuICAgIHByb2pMaXN0LmFwcGVuZENoaWxkKG5ld1Byb2opO1xufVxuXG5leHBvcnQge2NyZWF0ZVByb2p9Il0sIm5hbWVzIjpbImRlUmVuZGVyIiwicGFyZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZGVSZW5kZXJUaXRsZSIsImdlbmVyYXRlVGl0bGUiLCJwcm9qZWN0TmFtZSIsImJvZHlUaXRsZSIsInRpdGxlMSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0aXRsZTIiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwicmVuZGVyIiwidG9Eb0FyciIsImNvbnRlbnQiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwiYXJyYXkiLCJ0b0RvRGl2Iiwic2V0QXR0cmlidXRlIiwidGl0bGVEaXYiLCJkZXNjRGl2IiwiZHVlRGl2IiwicHJpb3JpdHlEaXYiLCJwcmlvcml0eSIsInRvZ2dsZUJveCIsInR5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlIiwiY291bnQiLCJyZW1vdmUiLCJjb250ZW50RWRpdGFibGUiLCJyZW1vdmVCdG4iLCJzcGxpY2UiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZVRvRG8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInB1c2hUb0RvIiwidG9kb0FyciIsInB1c2giLCJ0b0RvRmxvdyIsInRvRG9MaXN0IiwiZGVmYXVsdFByb2oiLCJwcm9qZWN0TGlzdCIsInRvZG9MaXN0Iiwid2luZG93IiwicHJvbXB0IiwidG9Mb3dlckNhc2UiLCJsb2NhdGlvbiIsImlzQ29tcGxldGUiLCJzdGF0ZSIsInRvZG9GYWN0b3J5IiwiY3JlYXRlVG9EbyIsImNyZWF0ZVRvRG9CdG4iLCJ0b0RvQnRuIiwicHJvakxpc3QiLCJuZXdQcm9qIiwiZmlsdGVyZWROYW1lIiwiZSIsImNyZWF0ZVByb2oiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==