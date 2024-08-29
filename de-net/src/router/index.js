import { createRouter, createWebHistory } from 'vue-router';
import MetamaskConnect from '@/components/MetamaskConnect.vue';
import HashGenerator from '@/components/HashGenerator.vue';
import DocPanel from '@/components/DocPanel.vue';
import EncryptText from '@/components/EncryptText.vue';
import DecryptText from '@/components/DecryptText.vue';
import BalanceDisplay from '@/components/BalanceDisplay.vue';
import SendTransaction from '@/components/SendTransaction.vue';
import TokenTransaction from '@/components/TokenTransaction.vue';

const routes = [
  { path: '/', component: MetamaskConnect },
  { path: '/hash-generator', component: HashGenerator },
  { path: '/doc-panel', component: DocPanel },
  { path: '/encrypt-text', component: EncryptText },
  { path: '/decrypt-text', component: DecryptText },
  { path: '/balance-display', component: BalanceDisplay },
  { path: '/send-transaction', component: SendTransaction },
  { path: '/token-transaction', component: TokenTransaction },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
