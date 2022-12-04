const parseEnv = () => {
  const targetKey = "RSS_";
  const env = Object.keys(process.env).filter((key) =>
    key.startsWith(targetKey)
  );

  env.forEach((key) => {
    console.log(`${key}=${process.env[key]}`);
  });
};

parseEnv();
