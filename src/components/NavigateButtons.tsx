import { ReactElement } from 'react';
import { useRouter } from 'next/router';

interface Props {
  back?: boolean;
  href?: string;
}

export default function NavigateButtons({ back, href }: Props): ReactElement {
  const router = useRouter();
  return (
    <div className="flex justify-end mt-8">
      {back && (
        <button className="btn btn-secondary mr-2" type="button" onClick={() => router.back()}>
          Back
        </button>
      )}
      <button className="btn btn-primary" type={href ? 'button' : 'submit'} onClick={() => href && router.push(href)}>
        Continue
      </button>
    </div>
  );
}
