const loadClasses = () => {
    const template = document.getElementById("templateClass");

    thesesClasses.forEach(thesesClass => {
        const clone = template.content.cloneNode(true);
        const hyperLink = clone.querySelector(".linkIndex");
        const classYear = clone.querySelector(".classYear");
        const studentNames = clone.querySelector(".studentNames");
        hyperLink.setAttribute("href", thesesClass.url);
        classYear.innerText = thesesClass.id;
        studentNames.innerText = `${thesesClass.students.join(", ")}.`;
        document.querySelector("main").append(clone);
    });
};