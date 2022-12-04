const parseArgs = () => {
  const argv = process.argv.slice(2);

  argv.forEach(
    (argv, idx, argvs) =>
      idx % 2 === 0 && console.log(`${argv} is ${argvs[idx + 1]}`)
  );
};

parseArgs();
