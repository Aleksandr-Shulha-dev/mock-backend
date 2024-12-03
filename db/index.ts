import userData from './user.json';
import campaign from './campaign.json';
import profile from './profile.json';
import manifestFile from './manifest.json';
import activitiesHistoryData from './activities-history.json';
import campaignsList from './campaigns-list.json';
import market from './market.json';
import refLeaderboard from './ref-leaderboard.json';
import pacmanJson from './pacman.json';
import pacmanResult from './pacman-result.json';

const balance = {
  id: 1,
  balance: 1213329996,
  balance_amount: 1.213329996,
  coin: {
    id: 1,
    digits: 10,
    get_image: "https://mycapbot.com/api/v1/images/icon_ton.svg",
    image: 'icon_ton.svg',
    name: "Toncoin",
    price: 2.2,
    short_name: "TON"
  },
}

const wallet = {
  "id": 1,
  "address": "EQDTwksfBIJ6KbA-cuil_hvV_nvJbLiTJW6u4Css85CtctuJ",
  "min_withdraw_limit": 100000000,
  "withdrawal_fee": 50000000,
  "network": {
      "id": 1,
      "name": "The Open Network",
      "short_name": "TON"
  },
  "coin": {
      "id": 1,
      "name": "Toncoin",
      "short_name": "TON",
      "digits": 9,
      "price": 1.76,
      "image": "icon_ton.svg",
      "get_image": "https://mycapbot.com/api/v1/images/icon_ton.svg"
  },
  "updated_date": "2023-08-12T11:19:39.987765+00:00",
};

const balance1 = {
  id: 2,
  balance: 1213329996,
  balance_amount: 1.213329996,
  coin: {
    id: 2,
    digits: 10,
    get_image: "https://volreviews.com/api/v1/images/icon_near.svg",
    image: 'icon_near.svg',
    name: "Near",
    price: 2.2,
    short_name: "NEAR"
  },
}

const wallet1 = {
  "id": 2,
  "address": "EQDTwksfBIJ6KbA-cuil_hvV_nvJbLiTJW6u4Css85CtctuJ",
  "min_withdraw_limit": 100000000,
  "withdrawal_fee": 50000000,
  "network": {
      "id": 2,
      "name": "The Open Network",
      "short_name": "NEAR"
  },
  "coin": {
      "id": 2,
      "name": "Near",
      "short_name": "NEAR",
      "digits": 9,
      "price": 1.01,
      "image": "icon_near.svg",
      "get_image": "https://volreviews.com/api/v1/images/icon_near.svg"
  },
  "updated_date": "2023-08-12T11:19:39.987765+00:00",
}

const user = userData;

const cheque = {
  "resp_status": "ok",
  "amount": 14950000.0,
  "is_pro": true,
  "is_boost": false,
  "is_for_new_users": false,
  "is_active": true,
  "is_has_password": false,
  "share_id": "3k7Ofcl",
  "candidate_id": null,
  "currency": {
      "name": "TON",
      "short_name": "TON",
      "digits": 9,
      "price": 5.110849999999999,
      "image": "icon_ton.svg",
      "is_native": true,
      "network_id": [
          1
      ],
      "coin_id": 1
  },
  "legacy_ref_link": "https://t.me/https://t.me/dknddsjn_bot/cheque?startapp=Y2hlcXVlX2lkPWdBQUFBQUJuSVI5WjlWR3FIcW5wT0xRU3A2NDhWTWxIUUllNmxNT2ZkSFNMNFF5QkhzZlktSU1SeU5oTmg3a1VJa29rc0F4a1R2UFZ2N0ZSdG9CaXRsMGo3dFFLQlNfekZRPT0mcmVmX3VzZXI9cjM2OTkxOTQ0Mw==",
  "legacy_text": "Promotion pool for 1.018 TON (5.2$): 34 participants will each receive 0.01495 TON (0.08$)  with a referral reward of 0.01 TON (0.05$)"
}

const logs = [
  {
    id: 1,
    user_id: 33333333,
    action: 'test',
    json_object: {
      "age": "18",
      "type": "succes-action"
    },
    created_date: "25.09.2023T09:00:00"
  },
  {
    id: 2,
    user_id: 33333332,
    action: 'test2',
    json_object: {
      "age": "18",
      "type": "succes-action"
    },
    created_date: "25.09.2023T10:00:00"
  },
  {
    id: 3,
    user_id: 33333333,
    action: 'test3',
    json_object: {
      "age": "20",
      "type": "succes-action-on"
    },
    created_date: "25.09.2023T09:00:00"
  },
  {
    id: 4,
    user_id: 33333332,
    action: 'test2',
    json_object: {
      "age": "18",
      "type": "succes-action"
    },
    created_date: "25.09.2023T11:00:00"
  }
];

const statistic = {
  current : [
    {
      "id": 1,
      "total_requests": 10000,
      "results": {
        "bots_blocked": 1000,
        "accounts_blocked": 25000,
        "activations": 9000,
      },
      "source": {
        "UA": 3000,
        "RU": 2000,
        "KZ": 1000,
        "UZ": 5000,
        "IR": 20000,
        "EN": 1000,
        "BP": 1000,
        "HU": 1000,
        
      } 
    },
      {
    "id": 2,
    "total_requests": 10000,
    "results": {
      "bots_blocked": 1000,
      "accounts_blocked": 25000,
      "activations": 9000,
    },
    "source": {
      "UA": 3000,
      "RU": 2000,
      "KZ": 1000,
      "UZ": 5500,
      "IR": 2200
    } 
  }
  ],
  total: {
    "total_requests": 50000,
    "results": {
      "bots_blocked": 2000,
      "accounts_blocked": 99000,
      "activations": 1000,
    },
    "source": {
      "UA": 3000,
      "RU": 2000,
      "KZ": 1000,
      "UZ": 5000,
      "IR": 20000,
      "get": 1500,
      "asdf": 500
    } 
  },
  history: [
    {
      "id": 1,
      "create_date": "2024-01-17T18:11:57.732851",
      "total_requests": 10000,
      "results": {
        "bots_blocked": 1000,
        "accounts_blocked": 25000,
        "activations": 9000,
      },
      "source": {
        "UA": 3000,
        "RU": 2000,
        "KZ": 1000,
        "UZ": 500,
        "IR": 200
      } 
    },
    {
      "id": 2,
      "create_date": "2024-01-16T18:11:57.732851",
      "total_requests": 10000,
      "results": {
        "bots_blocked": 1000,
        "accounts_blocked": 25000,
        "activations": 9000,
      },
      "source": {
        "UA": 3000,
        "RU": 2000,
        "KZ": 1000,
        "UZ": 500,
        "IR": 200
      } 
    }
  ]
}


// {
//   "id": 2,
//   "total_requests": 10000,
//   "results": {
//     "bots_blocked": 1000,
//     "accounts_blocked": 25000,
//     "activations": 9000,
//   },
//   "source": {
//     "UA": 3000,
//     "RU": 2000,
//     "KZ": 1000,
//     "UZ": 5500,
//     "IR": 2200
//   } 
// }


export { refLeaderboard, campaignsList, user, cheque, logs, statistic, balance, campaign, profile, manifestFile, activitiesHistoryData, market, pacmanJson, pacmanResult }