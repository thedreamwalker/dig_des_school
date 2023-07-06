const taskStatus = {
  DRAFT: 'DRAFT',
  IN_PROCESS: 'IN_PROCESS',
  COMPLETED: 'COMPLETED',
  TESTING: 'TESTING',
  TESTING_DONE: 'TESTING_DONE',
  CLOSED: 'CLOSED',
  DELETED: 'DELETED',
}

const taskStatusName = {
  DRAFT: 'Черновик',
  IN_PROCESS: 'В работе',
  COMPLETED: 'Завершена',
  TESTING: 'Тестирование',
  TESTING_DONE: 'Выполнена',
  CLOSED: 'Закрыта',
  DELETED: 'Удалена',
}

const taskStatusClass = {
  DRAFT: 'status_in-work',
  IN_PROCESS: 'status_in-work',
  COMPLETED: 'status_done',
  TESTING: 'status_in-work',
  TESTING_DONE: 'status_done',
  CLOSED: 'status_done',
  DELETED: 'status_error',
}

const userStatus = {
  ACTIVE: 'ACTIVE',
  BLOCKED: 'BLOCKED',
  DELETED: 'DELETED',
}

const userStatusName = {
  ACTIVE: 'Активен',
  BLOCKED: 'Заблокирован',
  DELETED: 'Удален',
}

const userStatusClass = {
  ACTIVE: 'status_active',
  BLOCKED: 'status_inactive',
  DELETED: 'status_error',
}

export {taskStatus, taskStatusName, taskStatusClass, userStatus, userStatusName, userStatusClass};