import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise){
    stripePromise = loadStripe('pk_test_51MJbQuF9guTtw2YGMb2Vs9aUZsWahXqUW6vKp3GaGpS4wglhQ4RjX0ys5jXh2gggSm8sj384BSbbL3TUdswfFg7p00ov5imo5j');
  }

  return stripePromise;
}

export default getStripe;