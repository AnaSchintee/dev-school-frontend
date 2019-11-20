export function read() {
  const contacts = window.localStorage.getItem("ds-contacts");
  return contacts.json() || [];
}

export function write() {
  window.localStorage.setItem("ds-contacts", JSON.stringify(data));
}

export function add(contact) {
  const contact = read();
  contacts.push(contact);
  write(contacts);
}

export function remove(contact) {}
