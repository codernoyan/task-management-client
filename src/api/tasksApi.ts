type TaskInfo = {
  userEmail: string;
  taskTitle: string;
  taskDescription: string;
  imageData: BodyInit | null | undefined
}

// post task data
export const addTask = async (taskData: TaskInfo) => {
  const time = new Date()
  const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`;
  const res = await fetch(url, {
    method: 'POST',
    body: taskData.imageData
  });
  const data = await res.json();
  const taskResponse = await fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({...taskData, imageData: data.data.url, postTime: time.toLocaleString()})
  });
  const postedTaskData = await taskResponse.json();
  return postedTaskData;
}