(()=>{"use strict";const t=()=>{let t=document.querySelector("#content");for(;t.firstChild;)t.removeChild(t.firstChild)};function e(t){let e=document.querySelector("#content");t.forEach((function(o,n,i){let r=document.createElement("div");r.setAttribute("id","toDoDiv"),console.log(`toDoArr item:${t} at index:${n}`),console.log(`item.title: ${o.title}`),r.textContent=o.title+" "+o.description+" "+o.dueDate+" "+o.priority,e.appendChild(r)}))}function o(t,e){return e.push(t),e}const n=(()=>{const n={defaultProj:[]};return(o=>{const n=document.createElement("div");n.textContent="Default";const i=document.querySelector("#projectList");n.addEventListener("click",(function(){t(),e(o.defaultProj)})),i.appendChild(n)})(n),(n=>{document.querySelector("#createToDoBtn").addEventListener("click",(function(){(t=>{const n=(()=>{let t=window.prompt("Enter title of ToDo:"),e=window.prompt("Enter description of ToDo:"),o=window.prompt("Enter due date of ToDo:"),n=window.prompt("Enter priority of ToDo:"),i=window.prompt("Enter the project you want this ToDo in:");if(""!=t&&null!=t&&""!=e&&null!=e&&""!=o&&null!=o&&""!=n&&null!=n){const r=((t,e,o,n,i)=>({title:t,description:e,dueDate:o,priority:n,location:i}))(t,e,o,n,i);return r}})();"default"==n.location||""==n.location||null==n.location?(o(n,t.defaultProj),e(t.defaultProj)):(o(n,t[n.location]),e(t[n.location]))})(n),t(),e(n.defaultProj)}))})(n),document.querySelector("#createProjectBtn").addEventListener("click",(function(){(o=>{const n=document.querySelector("#projectList"),i=document.createElement("div");i.classList.add("newProj");const r=window.prompt("Enter name of project:");o[r]=[],i.textContent=r,i.addEventListener("click",(function(){t(),e(o[r])})),n.appendChild(i)})(n)})),{toDoList:n}})();console.log("project a: "+n.toDoList.projectA)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsTUFBTUEsRUFBVyxLQUNiLElBQUlDLEVBQVNDLFNBQVNDLGNBQWMsWUFDcEMsS0FBT0YsRUFBT0csWUFDVkgsRUFBT0ksWUFBWUosRUFBT0csYUNIbkIsU0FBU0UsRUFBUUMsR0FDNUIsSUFBSUMsRUFBVU4sU0FBU0MsY0FBYyxZQUNyQ0ksRUFBUUUsU0FBUSxTQUFTQyxFQUFNQyxFQUFPQyxHQUNsQyxJQUFJQyxFQUFVWCxTQUFTWSxjQUFjLE9BQ3JDRCxFQUFRRSxhQUFhLEtBQU0sV0FDM0JDLFFBQVFDLElBQUksZ0JBQWdCVixjQUFvQkksS0FDaERLLFFBQVFDLElBQUksZUFBZVAsRUFBS1EsU0FDaENMLEVBQVFNLFlBQWNULEVBQUtRLE1BQVEsSUFBTVIsRUFBS1UsWUFBYyxJQUFNVixFQUFLVyxRQUFVLElBQU1YLEVBQUtZLFNBRTVGZCxFQUFRZSxZQUFZVixNQ1RiLFNBQVNXLEVBQVNkLEVBQU1lLEdBR25DLE9BRkFBLEVBQVFDLEtBQUtoQixHQUVOZSxFQ0NYLE1DQU1FLEVBQVcsTUFFYixNQUFNQyxFQUFXLENBQ2JDLFlBQWEsSUFpQmpCLE1DckJnQixDQUFDRCxJQUVqQixNQUFNQyxFQUFjM0IsU0FBU1ksY0FBYyxPQUMzQ2UsRUFBWVYsWUFBYyxVQUUxQixNQUFNVyxFQUFjNUIsU0FBU0MsY0FBYyxnQkFFM0MwQixFQUFZRSxpQkFBaUIsU0FBUyxXQUNsQy9CLElBQ0FNLEVBQU9zQixFQUFTQyxnQkFJcEJDLEVBQVlQLFlBQVlNLElETnhCQSxDQUFZRCxHRU5BLENBQUNBLElBQ0cxQixTQUFTQyxjQUFjLGtCQUcvQjRCLGlCQUFpQixTQUFTLFdIYWhCLENBQUNDLElBRW5CLE1BQU10QixFQW5CUyxNQUNmLElBQUlRLEVBQVFlLE9BQU9DLE9BQU8sd0JBQ3RCZCxFQUFjYSxPQUFPQyxPQUFPLDhCQUM1QmIsRUFBVVksT0FBT0MsT0FBTywyQkFDeEJaLEVBQVdXLE9BQU9DLE9BQU8sMkJBQ3pCQyxFQUFXRixPQUFPQyxPQUFPLDRDQUU3QixHQUFjLElBQVRoQixHQUF3QixNQUFUQSxHQUFrQyxJQUFmRSxHQUFvQyxNQUFmQSxHQUFvQyxJQUFYQyxHQUE0QixNQUFYQSxHQUFpQyxJQUFaQyxHQUE4QixNQUFaQSxFQUd4SSxDQUNELE1BQU1aLEVJZk0sRUFBQ1EsRUFBT0UsRUFBYUMsRUFBU0MsRUFBVWEsS0FDakQsQ0FBQ2pCLE1BQUFBLEVBQU9FLFlBQUFBLEVBQWFDLFFBQUFBLEVBQVNDLFNBQUFBLEVBQVVhLFNBQUFBLElKYzlCQyxDQUFZbEIsRUFBT0UsRUFBYUMsRUFBU0MsRUFBVWEsR0FFaEUsT0FBT3pCLElBTUUyQixHQUVRLFdBQWpCM0IsRUFBS3lCLFVBQTBDLElBQWpCekIsRUFBS3lCLFVBQW1DLE1BQWpCekIsRUFBS3lCLFVBQzFEWCxFQUFTZCxFQUFNc0IsRUFBU0gsYUFDeEJ2QixFQUFPMEIsRUFBU0gsZUFJaEJMLEVBQVNkLEVBQU1zQixFQUFTdEIsRUFBS3lCLFdBQzdCN0IsRUFBTzBCLEVBQVN0QixFQUFLeUIsYUd2QnJCRyxDQUFjVixHQUNkNUIsSUFDQU0sRUFBT3NCLEVBQVNDLGlCRkNwQlUsQ0FBUVgsR0FFVzFCLFNBQVNDLGNBQWMscUJBRS9CNEIsaUJBQWlCLFNBQVMsV0lidEIsQ0FBQ0gsSUFDaEIsTUFBTVksRUFBV3RDLFNBQVNDLGNBQWMsZ0JBQ2xDc0MsRUFBVXZDLFNBQVNZLGNBQWMsT0FDdkMyQixFQUFRQyxVQUFVQyxJQUFJLFdBRXRCLE1BQU1DLEVBQWNYLE9BQU9DLE9BQU8sMEJBQ2xDTixFQUFTZ0IsR0FBZSxHQUV4QkgsRUFBUXRCLFlBQWN5QixFQUV0QkgsRUFBUVYsaUJBQWlCLFNBQVMsV0FDOUIvQixJQUNBTSxFQUFPc0IsRUFBU2dCLE9BR3BCSixFQUFTakIsWUFBWWtCLElKRGpCSSxDQUFXakIsTUFPUixDQUFFQSxTQUFBQSxJQXBCSSxHQXlCakJaLFFBQVFDLElBQUksY0FBZ0JVLEVBQVNDLFNBQVNrQixXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RlUmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3B1c2hUb0RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVUb0RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGVmYXVsdFByb2ouanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvRG9CdG4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9GYWN0b3J5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlUmVuZGVyID0gKCkgPT4ge1xuICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBkZVJlbmRlciB9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlciAodG9Eb0Fycikge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIHRvRG9BcnIuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpbmRleCwgYXJyYXkpe1xuICAgICAgICBsZXQgdG9Eb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvRG9EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b0RvRGl2XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhgdG9Eb0FyciBpdGVtOiR7dG9Eb0Fycn0gYXQgaW5kZXg6JHtpbmRleH1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYGl0ZW0udGl0bGU6ICR7aXRlbS50aXRsZX1gKTtcbiAgICAgICAgdG9Eb0Rpdi50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGUgKyBcIiBcIiArIGl0ZW0uZGVzY3JpcHRpb24gKyBcIiBcIiArIGl0ZW0uZHVlRGF0ZSArIFwiIFwiICsgaXRlbS5wcmlvcml0eTtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRvRG9EaXYpO1xuICAgIH0pO1xuICAgIC8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9Eb0Rpdik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHVzaFRvRG8oaXRlbSwgdG9kb0Fycil7XG4gICAgdG9kb0Fyci5wdXNoKGl0ZW0pO1xuXG4gICAgcmV0dXJuIHRvZG9BcnI7XG59IiwiaW1wb3J0IHt0b2RvRmFjdG9yeX0gZnJvbSAnLi90b2RvRmFjdG9yeSc7XG5pbXBvcnQgcHVzaFRvRG8gZnJvbSAnLi9wdXNoVG9Ebyc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vcmVuZGVyJztcblxuY29uc3QgY3JlYXRlVG9EbyA9ICgpID0+IHtcbiAgICBsZXQgdGl0bGUgPSB3aW5kb3cucHJvbXB0KFwiRW50ZXIgdGl0bGUgb2YgVG9EbzpcIik7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gd2luZG93LnByb21wdChcIkVudGVyIGRlc2NyaXB0aW9uIG9mIFRvRG86XCIpO1xuICAgIGxldCBkdWVEYXRlID0gd2luZG93LnByb21wdChcIkVudGVyIGR1ZSBkYXRlIG9mIFRvRG86XCIpO1xuICAgIGxldCBwcmlvcml0eSA9IHdpbmRvdy5wcm9tcHQoXCJFbnRlciBwcmlvcml0eSBvZiBUb0RvOlwiKTtcbiAgICBsZXQgbG9jYXRpb24gPSB3aW5kb3cucHJvbXB0KFwiRW50ZXIgdGhlIHByb2plY3QgeW91IHdhbnQgdGhpcyBUb0RvIGluOlwiKTtcblxuICAgIGlmICgodGl0bGUgPT0gXCJcIiB8fCB0aXRsZSA9PSBudWxsKSB8fCAoZGVzY3JpcHRpb24gPT0gXCJcIiB8fCBkZXNjcmlwdGlvbiA9PSBudWxsKSB8fCAoZHVlRGF0ZSA9PSBcIlwiIHx8IGR1ZURhdGUgPT0gbnVsbCkgfHwgKHByaW9yaXR5ID09IFwiXCIgfHwgcHJpb3JpdHkgPT0gbnVsbCkpe1xuXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBpdGVtID0gdG9kb0ZhY3RvcnkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbG9jYXRpb24pO1xuXG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlVG9Eb0J0biA9ICh0b2RvTGlzdCkgPT4ge1xuXG4gICAgY29uc3QgaXRlbSA9IGNyZWF0ZVRvRG8oKTtcblxuICAgIGlmIChpdGVtLmxvY2F0aW9uID09IFwiZGVmYXVsdFwiIHx8IGl0ZW0ubG9jYXRpb24gPT0gXCJcIiB8fCBpdGVtLmxvY2F0aW9uID09IG51bGwpe1xuICAgICAgICBwdXNoVG9EbyhpdGVtLCB0b2RvTGlzdC5kZWZhdWx0UHJvaik7XG4gICAgICAgIHJlbmRlcih0b2RvTGlzdC5kZWZhdWx0UHJvaik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHB1c2hUb0RvKGl0ZW0sIHRvZG9MaXN0W2l0ZW0ubG9jYXRpb25dKTtcbiAgICAgICAgcmVuZGVyKHRvZG9MaXN0W2l0ZW0ubG9jYXRpb25dKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVUb0RvLFxuICAgIGNyZWF0ZVRvRG9CdG5cbn07IiwiaW1wb3J0IHtjcmVhdGVQcm9qfSBmcm9tICcuL2NyZWF0ZVByb2plY3QnO1xuaW1wb3J0IHtkZWZhdWx0UHJvan0gZnJvbSAnLi9kZWZhdWx0UHJvaic7XG5pbXBvcnQge3RvRG9CdG59IGZyb20gJy4vdG9Eb0J0bic7XG5cbmNvbnN0IHRvRG9GbG93ID0gKCgpID0+IHtcblxuICAgIGNvbnN0IHRvRG9MaXN0ID0ge1xuICAgICAgICBkZWZhdWx0UHJvajogW10sXG4gICAgfTtcblxuICAgIGRlZmF1bHRQcm9qKHRvRG9MaXN0KTtcblxuICAgIHRvRG9CdG4odG9Eb0xpc3QpO1xuXG4gICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlUHJvamVjdEJ0blwiKTtcblxuICAgIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBjcmVhdGVQcm9qKHRvRG9MaXN0KTtcbiAgICB9KVxuXG5cblxuXG5cbiAgICByZXR1cm4geyB0b0RvTGlzdCB9O1xufSkoKTtcblxuLy8gY29uc29sZS5sb2codG9kb0Zsb3cuaXRlbSk7XG4vLyBjb25zb2xlLmxvZyh0b0RvRmxvdy50b0RvTGlzdCk7XG5jb25zb2xlLmxvZyhcInByb2plY3QgYTogXCIgKyB0b0RvRmxvdy50b0RvTGlzdC5wcm9qZWN0QSk7IiwiaW1wb3J0IHsgZGVSZW5kZXIgfSBmcm9tIFwiLi9kZVJlbmRlclwiO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9yZW5kZXJcIjtcblxuY29uc3QgZGVmYXVsdFByb2ogPSAodG9Eb0xpc3QpID0+IHtcblxuICAgIGNvbnN0IGRlZmF1bHRQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVmYXVsdFByb2oudGV4dENvbnRlbnQgPSBcIkRlZmF1bHRcIjtcblxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TGlzdFwiKTtcblxuICAgIGRlZmF1bHRQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgZGVSZW5kZXIoKTtcbiAgICAgICAgcmVuZGVyKHRvRG9MaXN0LmRlZmF1bHRQcm9qKTtcbiAgICB9KTtcblxuXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoZGVmYXVsdFByb2opO1xufVxuXG5leHBvcnQgeyBkZWZhdWx0UHJvaiB9IiwiaW1wb3J0IHtjcmVhdGVUb0RvQnRufSBmcm9tICcuL2NyZWF0ZVRvRG8nO1xuaW1wb3J0IHsgZGVSZW5kZXIgfSBmcm9tICcuL2RlUmVuZGVyJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9yZW5kZXInO1xuXG5jb25zdCB0b0RvQnRuID0gKHRvRG9MaXN0KSA9PiB7XG4gICAgY29uc3QgdG9Eb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlVG9Eb0J0blwiKTtcblxuXG4gICAgdG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNyZWF0ZVRvRG9CdG4odG9Eb0xpc3QpO1xuICAgICAgICBkZVJlbmRlcigpO1xuICAgICAgICByZW5kZXIodG9Eb0xpc3QuZGVmYXVsdFByb2opO1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyB0b0RvQnRuIH0iLCJjb25zdCB0b2RvRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBsb2NhdGlvbikgPT4ge1xuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbG9jYXRpb259O1xufTtcblxuZXhwb3J0IHt0b2RvRmFjdG9yeX07IiwiaW1wb3J0IHsgZGVSZW5kZXIgfSBmcm9tIFwiLi9kZVJlbmRlclwiO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9yZW5kZXJcIjtcblxuY29uc3QgY3JlYXRlUHJvaiA9ICh0b0RvTGlzdCkgPT4ge1xuICAgIGNvbnN0IHByb2pMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0TGlzdFwiKTtcbiAgICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3UHJvai5jbGFzc0xpc3QuYWRkKCduZXdQcm9qJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHdpbmRvdy5wcm9tcHQoXCJFbnRlciBuYW1lIG9mIHByb2plY3Q6XCIpO1xuICAgIHRvRG9MaXN0W3Byb2plY3ROYW1lXSA9IFtdO1xuXG4gICAgbmV3UHJvai50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuXG4gICAgbmV3UHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGRlUmVuZGVyKCk7XG4gICAgICAgIHJlbmRlcih0b0RvTGlzdFtwcm9qZWN0TmFtZV0pO1xuICAgIH0pXG5cbiAgICBwcm9qTGlzdC5hcHBlbmRDaGlsZChuZXdQcm9qKTtcbn1cblxuZXhwb3J0IHtjcmVhdGVQcm9qfSJdLCJuYW1lcyI6WyJkZVJlbmRlciIsInBhcmVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInJlbmRlciIsInRvRG9BcnIiLCJjb250ZW50IiwiZm9yRWFjaCIsIml0ZW0iLCJpbmRleCIsImFycmF5IiwidG9Eb0RpdiIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwiYXBwZW5kQ2hpbGQiLCJwdXNoVG9EbyIsInRvZG9BcnIiLCJwdXNoIiwidG9Eb0Zsb3ciLCJ0b0RvTGlzdCIsImRlZmF1bHRQcm9qIiwicHJvamVjdExpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwidG9kb0xpc3QiLCJ3aW5kb3ciLCJwcm9tcHQiLCJsb2NhdGlvbiIsInRvZG9GYWN0b3J5IiwiY3JlYXRlVG9EbyIsImNyZWF0ZVRvRG9CdG4iLCJ0b0RvQnRuIiwicHJvakxpc3QiLCJuZXdQcm9qIiwiY2xhc3NMaXN0IiwiYWRkIiwicHJvamVjdE5hbWUiLCJjcmVhdGVQcm9qIiwicHJvamVjdEEiXSwic291cmNlUm9vdCI6IiJ9