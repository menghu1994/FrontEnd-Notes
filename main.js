const maxX = 9;
const maxY = 9;
const maxZ = 9;
const arr3d = [
  [[1,2,3],[4,5,6],[7,8,9]],
  [[11,12,13],[14,15,16],[17,18,19]],
  [[21,22,23],[24,25,26],[27,28,29]]
];
const dir = arr3d[9][9][9];
let flag = 0;
const mx = [1,0,0,-1,0,0];
const my = [0,1,0,0,-1,0];
const mz = [0,0,1,0,0,-1];

function DFS(cur,passed,x,y,z) {
  if(cur[x][y][z] = dir){
    this.flag = 1;
    alert('success');
    return
  }
  for(let i = 0;i < 6; i++) {
    let PX = x + mx[i];
    let PY = y + my[i];
    let PZ = z + mz[i];
    if(PX >= 0 && PX < maxX && PY >= 0 && PY < maxY && PZ >= 0 && PZ < maxZ && passed[PX][PY][PZ] !== 0) {
      passed[PX][PY][PZ] = arr3d[PX][PY][PZ];
      DFS(arr3d[PX][PY][PZ], passed, PX, PY, PZ)
    }
  }
}