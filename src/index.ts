
export function longProcess() {
  return new Promise((resolve) => {
    setTimeout(resolve, 6000);
  });
}

export function shortProcess() {
  return new Promise((resolve) => {
    setTimeout(resolve, 10);
  });
}
