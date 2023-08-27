document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.getElementById("textInput");
    const htmlBtn = document.getElementById("htmlBtn");
    const saveBtn = document.getElementById("saveBtn");
    const clearBtn = document.getElementById("clearBtn");

    htmlBtn.addEventListener("click", function() {
        const inputText = textInput.value;
        const formattedText = escapeHtml(inputText);
        textInput.value = formattedText;
    });

    saveBtn.addEventListener("click", function() {
        const inputText = textInput.value;
        const isHtml = isHTML(inputText);
        const fileName = isHtml ? "document.html" : "document.txt";

        const blob = new Blob([inputText], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        a.click();

        URL.revokeObjectURL(url);
    });

    clearBtn.addEventListener("click", function() {
        textInput.value = "";
    });

    function isHTML(str) {
        return /<[a-z][\s\S]*>/i.test(str);
    }

    function escapeHtml(unsafe) {
        return unsafe.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
});
