var canFinish = function (numCourses, prerequisites) {
  let map = {};
  for (let [course, dependency] of prerequisites) {
    if (!map[course]) {
      map[course] = [];
    }
    map[course].push(dependency);
  }

  let visited = {};
  for (let key in map) {
    visited[key] = false;
  }

  for (let [, dependency] of prerequisites) {
    if (map[dependency]) {
      if (!dfs(dependency)) {
        return false;
      }
    }
  }
  return true;

  function dfs(course) {
    if (!map[course]) {
      return true;
    }
    if (visited[course]) return false;
    visited[course] = true;

    for (let i = 0; i < map[course].length; i++) {
      let dependency = map[course][i];
      if (!map[dependency]) {
        map[course].shift();
        i--;
        if (map[course].length == 0) {
          delete map[course];
          return true;
        }
      } else if (!dfs(dependency)) {
        return false;
      }
    }
    delete map[course];
    return true;
  }
};
