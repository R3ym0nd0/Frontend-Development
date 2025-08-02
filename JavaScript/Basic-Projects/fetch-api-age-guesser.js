function getAge() {
      const input = document.getElementById("nameInput").value.trim();
      const result = document.getElementById("result");

      if (!input) {
        result.textContent = "No Input!"
        return
      }

      fetchThing(input, result);
    };

function fetchThing(input, result) {
  try {
    result.textContent = "Guessing..."
    setTimeout(async () => {
        const a = await fetch(`https://api.agify.io/?name=${input}`);
        const b =  await a.json();
        result.textContent = `Estimated Age: ${b.age}
        Count: ${b.count}`;
    }, 2000);
  } catch (err) {
    result.textContent = "Something went wrong, please try again"
    console.error(err)
  }
}