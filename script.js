function checkID() {
    const id = document.getElementById("studentID").value.trim();

    const validIDs = [
        "AH1001",
        "AH1002",
        "AH1003",
        "AH1004",
        "AH1005",
        "AH1006",
        "AH1007",
        "AH1008",
        "segada",
        "AH1010",
        "osa"
    ];

    if (id === "") {
        alert("الرجاء إدخال الـ ID الخاص بك!");
    } 
    else if (validIDs.includes(id)) {
        window.location.href = "videos.html?id=" + id;
    } 
    else {
        alert("الـ ID غير صحيح، يرجى التواصل مع الدعم.");
    }
}