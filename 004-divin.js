class TaskScheduler {
  scheduleTask(fun) {
    fun();
  }
}

const scheduler = new TaskScheduler();

const myTask = () => {
  console.log("Task executed");
  return "Task Completed Successfully!";
};

const taskId = scheduler.scheduleTask(myTask, 3000);



