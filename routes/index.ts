import { Router, Request, Response } from "express";
import { campaignsList, user, cheque, statistic, refLeaderboard, campaign, profile, manifestFile, activitiesHistoryData, market, pacmanJson, pacmanResult } from "../db";
import { stages, campaignInfo } from '../db/campaign'
import { activities } from "../db/activities";
import dailyTasks from '../db/daily-task.json';
import crypto from "crypto";

import logs from "../db/logs.json";
import { validate } from "@tma.js/init-data-node";
import { walletHistoryData } from "../db/history";
import path from "path";
import { GenerateTonProofPayload } from "../dto";


const userRoute = Router();
const withdrawRoute = Router();
const chequesRoute = Router();
const logsRoute = Router();
const statisticRoute = Router();
const chequeInitDataRoute = Router();
const activitiesRoute = Router();
const walletHistory = Router();
const manifest = Router();
const images = Router();
const files = Router();
const ton = Router();
const twitter = Router();
const tron = Router();
const pacman = Router();

let attemps = 0;
let changedUser: typeof user = {
  ...user,
  total_balance: 777.7
}

let pacmanJsonClone = {...pacmanJson};

let isTermsAccepted = true;

const DOMAIN = "ton-connect-js.echohub.ru";
const PAYLOAD_TTL = 3600; // 1 hour
const PROOF_TTL = 3600; // 1 hour
const SHARED_SECRET = "shhhh";

const error = {
  detail: {
    info: 'er',
    type: 'blocked-country',
    ref_reward: {
      coin: "TON",
      value: 0.99
    },
    chanels: [
      {
        name: '2 channel',
        image:
          'https://i.pinimg.com/564x/42/77/b8/4277b847781e0336453066dc81266235.jpg',
        link: '',
        status: 'ok',
      },
      {
        name: 'first channel',
        image:
          'https://i.pinimg.com/564x/42/77/b8/4277b847781e0336453066dc81266235.jpg',
        link: '',
        status: 'ok',
      },
      {
        name: 'first channel',
        image:
          'https://i.pinimg.com/564x/42/77/b8/4277b847781e0336453066dc81266235.jpg',
        link: '',
        status: 'unknown',
      },
      {
        name: 'first channel',
        image:
          'https://i.pinimg.com/564x/42/77/b8/4277b847781e0336453066dc81266235.jpg',
        link: '',
        status: 'not_subscribed',
      }
    ]
  }
}

let campaingData = {
  ...campaignInfo,
  stages: [stages[0]]
}


const response = (data: any) => {
  return { status: 'ok', data }
}

const botToken = process.env.BOT_TOKEN || "";

chequeInitDataRoute.post('/checkInitData', (req: Request, res: Response) => {
  console.log(req.body);
  const initData = req.body.initData
  const resValidation = validate(initData, botToken);
  console.log('res val')
  console.log(resValidation)
  const data = response({ validate: true });
  res.status(200).json(data)
})

userRoute.get('/users',  (req: Request, res: Response) => {
  const data = response(user);
  res.status(200).json(data);
})

userRoute.get('/users/check',  (req: Request, res: Response) => {
  res.status(200).json({})
})

userRoute.get('/users/balance',  (req: Request, res: Response) => {
  res.status(200).json({ status: 'processing' })
})

userRoute.get('/users/:userId/terms',  (req: Request, res: Response) => {
  console.log(req.params.userId);

  res.status(200).json({ accepted: isTermsAccepted })
});

userRoute.post('/users/:userId/terms',  (req: Request, res: Response) => {
  isTermsAccepted = true;
  res.status(200).json({})
})


withdrawRoute.post('/withdraw', (req: Request, res: Response) => {
  user.total_balance = 300;
  console.log(req.body)
  // setTimeout(() => {
  //   res.status(200).json({ status: "ok" })
  // }, 4000)
  res.status(401).json(error);
})

chequesRoute.get('/cheques/:chequeId', (req: Request, res: Response) => {
  const data = response(cheque);
  setTimeout(() => {
  res.status(200).json(cheque)
  }, 1000)
  
  //res.status(401).json(error)

})

chequesRoute.get('/cheques/:chequeId/ref', (req: Request, res: Response) => {
  const data = {
    referal_reward: {
      coin: "TON", // "NEAR", "DFC", string
      value: 0.01  // number
    }
  }
  res.status(200).json(data)
  
  //res.status(401).json(error)

})

chequesRoute.get('/cheques/:chequeId/captcha', (req: Request, res: Response) => {
  attemps = 0;
  const data = response(attemps);
  res.status(200).json(data)
})

chequesRoute.post('/cheques/:chequeId/captcha', (req: Request, res: Response) => {
  attemps += 1;

  if(attemps === 3) {
    res.status(401).json(error)
  } else {
    const data = response(attemps);
    res.status(200).json(data)
  }
})

chequesRoute.post('/cheques/:chequeId/new_activation', (req: Request, res: Response) => {
  const data = response(changedUser);
  setTimeout(() => {
    res.status(200).json({ candidate_id: 'asdfasdf'})
  }, 4000)
  // res.status(200).json(data)
  // res.status(401).json(error)
})

chequesRoute.post('/cheques/:chequeId/check_password', (req: Request, res: Response) => {
  const password = req.body?.password;
  const data = response("True");
  if(password === "admin") {
    res.status(200).json(data)
  } else {
    res.sendStatus(401)
  }
});

logsRoute.get('/logs/:password', (req: Request, res: Response) => {
  console.log('isLogs')
  const data = response(logs)
  res.status(200).json(data)
  //res.sendStatus(401)
});

statisticRoute.get('/statistic/all', (req: Request, res: Response) => {
  res.status(200).json(statistic.total);
})

statisticRoute.get('/statistic/current', (req: Request, res: Response) => {
  const data = response(statistic);
  setTimeout(() => {
    res.status(200).json(statistic.current);
  }, 5000)
});

statisticRoute.get('/statistic/history', (req: Request, res: Response) => {
  const data = response(statistic);
  res.status(200).json(statistic.history);
});

statisticRoute.get('/statistic/:chequeId', (req: Request, res: Response) => {
  statistic.current[0].results.activations += 15;
  statistic.current[0].source.UA += 15;
  res.status(200).json(statistic.current[0]); 
});

activitiesRoute.get('/quests/user/:userId', (req: Request, res: Response) => {
  setTimeout(() => {
    res.status(200).json(activities.user);
  }, 4000)
})

activitiesRoute.get('/quests/organization', (req: Request, res: Response) => {
  res.status(200).json(activities.organizations);
})
activitiesRoute.get('/quests/leaderboard/referrals/me', (req: Request, res: Response) => {
  res.status(200).json(null);
})

activitiesRoute.get('/quests/leaderboard/referrals', (req: Request, res: Response) => {
  res.status(200).json(refLeaderboard);
})

activitiesRoute.get('/quests/leaderboard', (req: Request, res: Response) => {
  res.status(200).json(activities.leaderboard.list);
})

activitiesRoute.get('/quests/leaderboard/:userId', (req: Request, res: Response) => {
  res.status(200).json(activities.leaderboard.me);
})

activitiesRoute.get('/quests/campaign/info/:campaignId', (req: Request, res: Response) => {
  campaingData = {
    ...campaignInfo,
    stages
  }

  setTimeout(() => {
    res.status(200).json(campaingData);
  }, 3000)
  
})

activitiesRoute.get('/quests/campaign', (req: Request, res: Response) => {
  //campaignsList
  res.status(200).json(campaignsList);
})

activitiesRoute.get('/quests/ref_id', (req: Request, res: Response) => {
  res.status(200).json('test');
})

activitiesRoute.get('/recurring/me', (req: Request, res: Response) => {
  setTimeout(() => {
    //res.status(200).json([])
    res.status(200).json(dailyTasks)
  }, 3000)
})

activitiesRoute.put('/recurring/claim/:taskId', (req: Request, res: Response) => {
  const taskId = req.params.taskId;
  const taskIndex = dailyTasks[0].recurring_tasks.findIndex(task => task.id === Number(taskId));
  const task = dailyTasks[0].recurring_tasks[taskIndex];
  
  if(!task.is_completed) {
    task.is_completed = true
  } else if(!task.is_reward_claimed) {
    task.is_reward_claimed = true
  } else {

  }
  setTimeout(() => {
    res.status(200).json(task);
    //res.status(401).json({})
  }, 3000)
  

});

activitiesRoute.post('/quests/campaign/:campaignId/start', (req: Request, res: Response) => {
  campaingData.is_started_by_user = true;
  const stage = campaingData.stages[0];
  stage.is_opened = true;
  res.status(200).json(campaingData);  
})


activitiesRoute.put('/quests/task/:taskId/claim', (req: Request, res: Response) => {
  const { taskId } = req.params;
  const stage = campaingData.stages[0]
   //  Number(taskId) == task.id ? ({...task, is_completed: true }) : task
  // stage.tasks =  stage.tasks.map((task) => {
  //   if(Number(taskId) !== task.id) {
  //     return task;
  //   }
  //   //@ts-igonre
  //   if(!task.is_completed) {
  //     return ({...task, is_completed: true })
  //   } else {
  //     return ({...task, is_reward_claimed: true })
  //   }


  // })

  campaingData.claimed_rewards_percentage += 20;

  //res.status(200).json(campaingData);
  // res.status(401).json({});

  setTimeout(() => {
    res.status(200).json(campaingData);
  }, 3000)
})

activitiesRoute.get('/quests/account/me/info', (req: Request, res: Response) => {
  res.status(200).json(profile);
  // setTimeout(() => {
  //   res.status(200).json(profile);
  // }, 4000)
})

activitiesRoute.get('/quests/account/me/history', (req: Request, res: Response) => {
  res.status(200).json(activitiesHistoryData);
})

activitiesRoute.get('/quests/market', (req: Request, res: Response) => {
  setTimeout(() => {
    res.status(200).json(market);
  }, 4000)
  
})

activitiesRoute.post('/quests/market/purchase', (req: Request, res: Response) => {
  const data = {
    "purchase_successful": true,
    "points_spent": 0,
    "new_points_balance": 777
  }

  setTimeout(() => {
    res.status(200).json(data);
  }, 4000)
  

  // res.status(200).json(data);
})

activitiesRoute.post('/ton/check_proof', (req: Request, res: Response) => {
  res.status(200).json({});
})

activitiesRoute.post('/ton/disconnect', (req: Request, res: Response) => {
  res.status(200).json({});

  // res.status(200).json(data);
})


walletHistory.get('/wallet/history/:userId', (req: Request, res: Response) => {
  setTimeout(() => {  res.status(200).json(walletHistoryData); }, 4000)
})

walletHistory.get('/wallet/history/full/me', (req: Request, res: Response) => {
  setTimeout(() => {  res.status(200).json(walletHistoryData); }, 4000);
  //res.status(401).json({})
})


manifest.get('/manifest', (req: Request, res: Response) => {
  res.status(200).json(manifestFile);
});

images.get('/images/:imageName', (req: Request, res: Response) => {
  const absolutePath = path.resolve('./images', req.params.imageName);
  res.sendFile(absolutePath)
})

files.get('/files/:fileName', (req: Request, res: Response) => {
  const absolutePath = path.resolve('./files', req.params.fileName);
  res.sendFile(absolutePath)
})

ton.post("/ton/generate-payload", (_, res: Response<GenerateTonProofPayload>) => {
  // ```
  // 0             8                 16               48
  // | random bits | expiration time | sha2 signature |
  // 0                                       32
  // |             payload_hex               |
  // ```
  const randomBits = crypto.randomBytes(8);

  const currentTime = Math.floor(Date.now() / 1000);
  const expirationTime = Buffer.alloc(8);
  expirationTime.writeBigUint64BE(BigInt(currentTime + PAYLOAD_TTL));
  const payload = Buffer.concat([randomBits, expirationTime]);

  const hmac = crypto.createHmac("sha256", SHARED_SECRET);
  hmac.update(payload);
  const signature = hmac.digest();

  const finalPayload = Buffer.concat([payload, signature]);

  const payloadHex = finalPayload.subarray(0, 32).toString("hex");

  res.json({ payload: payloadHex });
});

twitter.get("/twitter/auth_url", (req, res) => {
  res.status(200).json({ 
    auth_url: 'https://translate.google.cdom/?sl=en&tl=uk&op=translate',
    request_secret: 'secret'
  })
});

twitter.post('/twitter/connect', (req, res) => {
  res.status(200).json({
    x_user_id: '12345',
    x_name: 'alex',
    x_screen_name: 'Alex'
  })
});

twitter.put('/twitter/disconnect/:userId', (req, res) => {
  res.status(200).json({})
});

pacman.get('/game/user/me',  (req, res) => {
  res.status(200).json(pacmanJsonClone)
});

pacman.post('/game/user/result',  (req, res) => {
  console.log(req.body);

  pacmanJsonClone.level += 1;

  setTimeout(() => {
    res.status(200).json(pacmanResult);
  }, 4000)
  
})

export {
  userRoute,
  withdrawRoute,
  chequesRoute,
  logsRoute,
  statisticRoute,
  chequeInitDataRoute,
  activitiesRoute,
  walletHistory,
  manifest,
  images,
  files,
  ton,
  twitter,
  pacman
}