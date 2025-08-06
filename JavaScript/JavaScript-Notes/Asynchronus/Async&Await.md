# ✨ [] ASYNC / AWAIT []

    async function loadData() {
        try {
            let res = await fetchUser();  // Waits for promise to resolve
            console.log(res);            // { name: "Reymond", age: 20 }
        } catch (err) {
            console.error("Error:", err);
        } finally {
            console.log("Finished ✅");
        }
    }
    
    loadData();
