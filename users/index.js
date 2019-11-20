const main = {
  users: [],
  err: "",

  async init() {
    const users = await this.fetchUsers();
    if (users) {
      this.users = users;
    } else {
      this.error = "An error has occurred.";
    }
    this.render();
  },

  async fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (response.ok) {
      const data = response.json();
      return data;
    } else {
      return null;
    }
  },

  render() {
    const list = document.getElementById("list");
    this.users.forEach(user => {
      list.innerHTML += `<li>Name: ${user.name}, Email: ${user.email}, Telephone: ${user.phone}</li>`;
    });
  }
};
