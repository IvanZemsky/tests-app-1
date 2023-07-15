const availabledStatuses = ['error', 'success'];

const setStatus = (el, status) => {
  availabledStatuses.map((st) => el.classList.remove(st));
  if (availabledStatuses.includes(status)) {
    return el.classList.add(status);
  }
}

export {
  availabledStatuses,
  setStatus
}