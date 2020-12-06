import Head from 'next/head';
import styles from '../styles/home.module.css';

// Components
import Footer from '../components/footer/Footer';
import Menu from '../components/menu/Menu';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="../public/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="google-site-verification" content="WOGUalplDuCjzI9CkM7nSUnHMFJrmYUinVYK_nM5NeY" />
        <meta
          name="description"
          content="Become part of an ever expanding online market. Build you company website today!"
        />
        <link rel="apple-touch-icon" href="../public/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon-16x16.png" />
        <link rel="manifest" href="../public/manifest.json" />
        <title>Weber</title>
      </Head>

      <main className={styles.page_holder}>
        <div className={styles.welcome_div}>
          <div className={styles.welcome_content}>
            <header className={styles.logo_holder}>
              <a href='/'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 96" className={styles.logo}>
                  <defs />
                  <g fill="none" stroke="#45a3e2" strokeWidth="5">
                    <path stroke="none" d="M0 0h179v96H0z" />
                    <path d="M2.5 2.5h174v91H2.5z" />
                  </g>
                  <text fill='#fff' className={styles.logo_text}>
                    <tspan x="0" y="78">WEBER</tspan>
                  </text>
                </svg>
              </a>
              <Menu variant='light' active={1} />
            </header>
            <div className='_row'>
              <div className='_center '>
                <svg id='main_svg' xmlns='http://www.w3.org/2000/svg' data-name='Layer 1'
                  viewBox='0 0 876.27165 661.47277' className={styles.main_illustration}>
                  <path className={styles.top_girl} fill='#2f2e41'
                    d='M504.97006 32.19404c7.51624 15.99516-8.41069 20.5258-26.65516 29.099s-31.8977 17.94247-39.41393 1.94732-13.61474-47.74263 12.19523-59.87092c26.69916-12.5461 46.35763 12.82944 53.87386 28.8246z' />
                  <circle className={styles.top_girl} cx='467.74627' cy='39.08912' r='24.56103'
                    fill='#ffb8b8' />
                  <path className={styles.top_girl} fill='#2f2e41'
                    d='M589.4262 148.01231c-.85009-1.11-1.70019-2.2-2.56006-3.26q-1.66479-2.07-3.35009-4.01c-12.73-14.69-26.27-23.94-41.17969-24.93h-.02l-.22021-.02-29.71 28.96-10.10009 9.84.22021.54 5.44971 13.57h95.49023a234.83392 234.83392 0 00-14.02001-20.69zM441.0379 48.97733l8.792-4.13144-1.22476-12.68333 5.87908 10.49623 4.20223-1.97466-.7144-7.39862 3.42957 6.12274 31.22444-14.67258a26 26 0 00-34.589-12.47385l-4.52533 2.12648a26 26 0 00-12.47383 34.58903z' />
                  <path className={styles.browser} fill='#f2f2f2'
                    d='M644.52606 494.80016h-512.8385a16.51867 16.51867 0 01-16.5-16.5V170.14635a12.10184 12.10184 0 0112.08789-12.08838h521.45349a12.31112 12.31112 0 0112.29712 12.29736v307.94483a16.51868 16.51868 0 01-16.5 16.5z' />
                  <path className={styles.browser} fill='#fff'
                    d='M147.68756 478.30016h480.8385a16 16 0 0016-16V200.75231a16 16 0 00-16-16h-480.8385a16 16 0 00-16 16v261.54785a16 16 0 0016 16z' />
                  <path className={styles.browser} fill='#6c63ff'
                    d='M660.79632 169.20254H114.95599v-8.40039a16.57376 16.57376 0 0116.56006-16.5498h512.72021a16.57368 16.57368 0 0116.56006 16.5498z' />
                  <circle className={styles.browser} cx='145.05135' cy='156.7523' r='4.28342' fill='#fff' />
                  <circle className={styles.browser} cx='161.31015' cy='156.7523' r='4.28342' fill='#fff' />
                  <circle className={styles.browser} cx='177.56896' cy='156.7523' r='4.28342' fill='#fff' />
                  <path className={styles.second_bookmark} fill='#ccc'
                    d='M403.11024 421.57908h-43a9.51081 9.51081 0 01-9.5-9.5v-43a9.51081 9.51081 0 019.5-9.5h43a9.51081 9.51081 0 019.5 9.5v43a9.51081 9.51081 0 01-9.5 9.5zm-43-60a7.50835 7.50835 0 00-7.5 7.5v43a7.50836 7.50836 0 007.5 7.5h43a7.50836 7.50836 0 007.5-7.5v-43a7.50835 7.50835 0 00-7.5-7.5z' />
                  <path className={styles.second_bookmark} fill='#ccc'
                    d='M394.61024 409.57908h-26a3.00328 3.00328 0 01-3-3v-32a3.00328 3.00328 0 013-3h18.83935a3.0073 3.0073 0 011.8794.66162l7.16016 5.7539a2.9844 2.9844 0 011.12109 2.33838v26.2461a3.00328 3.00328 0 01-3 3zm-26-36a1.0013 1.0013 0 00-1 1v32a1.0013 1.0013 0 001 1h26a1.0013 1.0013 0 001-1v-26.2461a.99457.99457 0 00-.37354-.77929l-7.16113-5.7544a1.00206 1.00206 0 00-.626-.22021z' />
                  <path className={styles.third_bookmark} fill='#ccc'
                    d='M389.61024 385.57908h-16a1 1 0 010-2h16a1 1 0 010 2zM389.61024 391.57908h-16a1 1 0 010-2h16a1 1 0 010 2zM389.61024 397.57908h-16a1 1 0 010-2h16a1 1 0 010 2zM505.11024 421.57908h-43a9.51081 9.51081 0 01-9.5-9.5v-43a9.51081 9.51081 0 019.5-9.5h43a9.51081 9.51081 0 019.5 9.5v43a9.51081 9.51081 0 01-9.5 9.5zm-43-60a7.50835 7.50835 0 00-7.5 7.5v43a7.50836 7.50836 0 007.5 7.5h43a7.50836 7.50836 0 007.5-7.5v-43a7.50835 7.50835 0 00-7.5-7.5z' />
                  <path className={styles.third_bookmark} fill='#ccc'
                    d='M497.61024 401.57908h-28a3.00328 3.00328 0 01-3-3v-16a3.00328 3.00328 0 013-3h28a3.00328 3.00328 0 013 3v16a3.00328 3.00328 0 01-3 3zm-28-20a1.001 1.001 0 00-1 1v16a1.001 1.001 0 001 1h28a1.001 1.001 0 001-1v-16a1.001 1.001 0 00-1-1z' />
                  <path className={styles.first_bookmark} fill='#ccc'
                    d='M483.61024 393.21726a3.00345 3.00345 0 01-1.58984-.45264l-14.94043-9.3374a1.00027 1.00027 0 011.06054-1.69629l14.94043 9.3374a1.00555 1.00555 0 001.05957 0l14.93946-9.3374a1.00027 1.00027 0 011.06054 1.69629l-14.93945 9.3374a3.00432 3.00432 0 01-1.59082.45264zM301.11024 421.57908h-43a9.51081 9.51081 0 01-9.5-9.5v-43a9.51081 9.51081 0 019.5-9.5h43a9.51081 9.51081 0 019.5 9.5v43a9.51081 9.51081 0 01-9.5 9.5zm-43-60a7.50835 7.50835 0 00-7.5 7.5v43a7.50836 7.50836 0 007.5 7.5h43a7.50836 7.50836 0 007.5-7.5v-43a7.50835 7.50835 0 00-7.5-7.5z' />
                  <path className={styles.first_bookmark} fill='#ccc'
                    d='M293.61024 401.57908h-28a3.00328 3.00328 0 01-3-3v-16a3.00328 3.00328 0 013-3h28a3.00328 3.00328 0 013 3v16a3.00328 3.00328 0 01-3 3zm-28-20a1.001 1.001 0 00-1 1v16a1.001 1.001 0 001 1h28a1.001 1.001 0 001-1v-16a1.001 1.001 0 00-1-1z' />
                  <path className={styles.first_bookmark} fill='#ccc'
                    d='M289.17225 401.57908h-20.124a1.99958 1.99958 0 01-1.73194-3l6.06153-10.5a2.00022 2.00022 0 013.46435 0l3.915 6.78125 2.26807-3.92871a2.00022 2.00022 0 013.46435 0l4.415 7.64746a2 2 0 01-1.73242 3zm0-2l-4.415-7.64746-3.13379 5.42871a.99985.99985 0 01-.86621.5.99985.99985 0 01-.86621-.5l-4.78076-8.28125-6.062 10.5z' />
                  <circle className={styles.first_bookmark} cx='290.61013' cy='385.57888' r='2' fill='#ccc' />
                  <path className={styles.male_body} fill='#ffb8b8'
                    d='M768.825 648.15l-12.26-.001-5.832-47.288 18.094.001-.002 47.288z' />
                  <path className={styles.male_body} fill='#2f2e41'
                    d='M771.95147 660.03388l-39.53051-.00146v-.5a15.38605 15.38605 0 0115.38647-15.38623h.001l24.1438.001z' />
                  <path className={styles.male_body} fill='#ffb8b8'
                    d='M818.825 648.15l-12.26-.001-5.832-47.288 18.094.001-.002 47.288z' />
                  <path className={styles.male_body} fill='#2f2e41'
                    d='M821.95147 660.03388l-39.53051-.00146v-.5a15.38605 15.38605 0 0115.38647-15.38623h.001l24.1438.001zM815.14973 627.65033l-11.35449-3.4541a4.49323 4.49323 0 01-3.16577-3.833l-10.58594-100.32618a.47984.47984 0 00-.47851-.44726.46935.46935 0 00-.5105.40918l-17.731 97.19922a4.50036 4.50036 0 01-5.33471 3.59961l-14.51144-2.98926a4.51613 4.51613 0 01-3.58179-4.71192l10.7854-159.3125 73.13794-7.8916L820.951 623.61908a4.50464 4.50464 0 01-4.48437 4.22754 4.52613 4.52613 0 01-1.3169-.19629z' />
                  <circle className={styles.male_body} cx='815.08028' cy='290.48693' r='24.56103'
                    fill='#ffb8b8' />
                  <path className={styles.male_body} fill='#6c63ff'
                    d='M758.56844 454.71967l15.85815-99.85107a37.85746 37.85746 0 0148.00537-30.39942 37.74323 37.74323 0 0126.60108 43.26221l-16.59107 89.17187z' />
                  <path className={styles.male_body} fill='#ffb8b8'
                    d='M821.86083 472.58563a10.0558 10.0558 0 001.747-15.32l16.39619-31.75128-18.46486 1.97048-12.73924 29.84946a10.11027 10.11027 0 0013.06089 15.25138z' />
                  <path className={styles.male_body} fill='#6c63ff'
                    d='M825.37177 451.66509a4.50552 4.50552 0 01-2.4265-1.15083l-6.27324-5.79662a4.51468 4.51468 0 01-1.09178-5.05417l12.53746-29.71816-1.77859-58.71981a14.49652 14.49652 0 1128.727 3.91856l3.041 36.91226a46.37346 46.37346 0 01-8.93769 31.39683l-19.55206 26.43232a4.505 4.505 0 01-3.19513 1.80387 4.45452 4.45452 0 01-1.05047-.02425z' />
                  <path className={styles.male_hand} fill='#ffb8b8'
                    d='M673.64091 277.10514a10.05575 10.05575 0 0013.42647 7.58193l22.84575 27.47819 5.38477-17.77183-22.52025-23.36914a10.11027 10.11027 0 00-19.13674 6.08085z' />
                  <path className={styles.male_hand} fill='#6c63ff'
                    d='M691.5369 288.49504a4.50564 4.50564 0 012.00583-1.78577l7.78377-3.51672a4.51467 4.51467 0 015.07986.96521l22.478 23.13213 54.76621 21.25658a14.49652 14.49652 0 11-14.80889 24.92573l-35.17667-11.59151a46.37351 46.37351 0 01-25.42736-20.47176l-16.71728-28.31048a4.50493 4.50493 0 01-.41535-3.64558 4.45446 4.45446 0 01.43188-.95783z' />
                  <path className={styles.male_body}
                    d='M835.002 375.652l-1 32-18.422 32.011 15.382-35.673 4.04-28.338z' opacity='.1' />
                  <path className={styles.male_body} fill='#2f2e41'
                    d='M812.2663 295.10267a6.42292 6.42292 0 01-7.03053-4.70224 9.76432 9.76432 0 00-6.95075-7.2736c-4.5055-1.02949-10.01213 1.09128-13.31351-2.32232a6.63748 6.63748 0 01-1.57539-5.84234c.60807-3.31718 2.981-5.8232 5.56326-7.8275a34.06226 34.06226 0 0118.8661-7.05067 67.67657 67.67657 0 0110.62084.52837 47.00933 47.00933 0 0110.86368 1.98538 25.57605 25.57605 0 0116.00171 18.68024 29.528 29.528 0 01-6.05709 24.13034 31.70221 31.70221 0 01-12.16059 9.25872 4.74429 4.74429 0 01-3.60621.18291c-2.95734-1.17583-2.47409-4.83917-1.12569-7.28253 1.443-2.61478 3.66335-5.1464 2.50287-8.32859a6.302 6.302 0 00-3.12714-3.3662c-2.93992-1.49928-6.22821-1.14456-9.38876-.77957z' />
                  <path className={styles.big_item} fill='#fff'
                    d='M665.43324 308.97264h-304a16.51867 16.51867 0 01-16.5-16.5v-65a16.51868 16.51868 0 0116.5-16.5h304a16.519 16.519 0 0116.5 16.5v65a16.519 16.519 0 01-16.5 16.5z' />
                  <path className={styles.big_item} fill='#3f3d56'
                    d='M665.43307 309.47278h-304a17.01917 17.01917 0 01-17-17v-65a17.01916 17.01916 0 0117-17h304a17.01916 17.01916 0 0117 17v65a17.01917 17.01917 0 01-17 17zm-304-97a15.017 15.017 0 00-15 15v65a15.017 15.017 0 0015 15h304a15.017 15.017 0 0015-15v-65a15.017 15.017 0 00-15-15z' />
                  <path className={styles.big_item_bg} fill='#f2f2f2'
                    d='M628.43307 292.97278h-230a16.51868 16.51868 0 01-16.5-16.5v-34a16.51867 16.51867 0 0116.5-16.5h230a16.51866 16.51866 0 0116.5 16.5v34a16.51867 16.51867 0 01-16.5 16.5z' />
                  <circle className={styles.sun} cx='447.92802' cy='254.91484' r='19.73228' fill='#ff6584' />
                  <path className={styles.mountains} fill='#3f3d56'
                    d='M614.14008 290.98144l-27.85254-23.35968-27.37158-22.95636a4.00031 4.00031 0 00-5.15283.01l-27.28321 23.06165-6.66406 5.6333-10.04834-8.42737-30.53711-25.61084a3.99964 3.99964 0 00-5.15234.00989l-30.438 25.72833-30.917 26.13349a.99994.99994 0 00.64746 1.76373l63.38672-.12213 20.064-.03864-.19629.166 59.80762-.11524 57.0669-.10992a.99989.99989 0 00.6406-1.76621z' />
                  <path className={styles.male_line} fill='#ccc'
                    d='M875.27166 661.47278h-192a1 1 0 010-2h192a1 1 0 010 2z' />
                  <path className={styles.top_girl} fill='#ffb8b8'
                    d='M604.05609 131.91228a11.22094 11.22094 0 00-7.25-5.1 10.30111 10.30111 0 00-1.65967-.21l-76.19043-68.12a9.01491 9.01491 0 00-5.62988-2.69 7.66989 7.66989 0 00-1.27-.04 9.05493 9.05493 0 00-5.96 15.48l29.16992 25.43 47.8999 41.75a11.91555 11.91555 0 00.3501 2.33 11.26607 11.26607 0 009.66992 8.37 11.09212 11.09212 0 006.05029-1 11.40659 11.40659 0 003.87988-2.97c.10987-.13.21-.25.31006-.39a11.29281 11.29281 0 00.62989-12.84zM473.73626 197.5623l-.71-28.86-.6001-23.95-.41015-16.76-.81006-32.67a9.04565 9.04565 0 00-15.71-5.25 6.92326 6.92326 0 00-.75.96 8.93574 8.93574 0 00-1.56006 6.05l1.78027 47.67.89014 23.95 1.13965 30.55a12.0475 12.0475 0 00-.88965 1.41 11.248 11.248 0 00-.71 8.84 11.31144 11.31144 0 0015.55957 6.63 11.30069 11.30069 0 002.78027-18.57z' />
                  <path className={styles.top_girl} fill='#ccc'
                    d='M542.33636 115.8123l-7.07031-19.15-11.43994-31.02a16.0055 16.0055 0 00-9.9502-9.68c-.17969-.06-.36963-.12-.5498-.17005a15.984 15.984 0 00-13.23975 1.82l-38.53027 24.44a16.09316 16.09316 0 00-5.27 21.75 276.323 276.323 0 0015.73 24.19c4.49023 6.11 12.85009 6.76 14.30029 16.76h28.40967l28.76025-25.82z' />
                  <circle className={styles.left_girl} cx='101.16464' cy='326.68231' r='23.17166'
                    fill='#a0616a' />
                  <path className={styles.left_girl} fill='#a0616a'
                    d='M158.05134 310.7321q.3425.27261.66395.57794a10.38021 10.38021 0 01-.41708 15.48365 9.72179 9.72179 0 01-.81382.61338l1.56823 52.94493a8.06132 8.06132 0 01-5.545 7.867l-.09553.02052-42.98869 4.578a8.89852 8.89852 0 11-1.72218-17.71279l30.64427-2.69888 5.29962-45.851a9.87574 9.87574 0 01-.97155-.99 10.38 10.38 0 0114.3778-14.83273zM139.328 649.174h11.567l5.502-44.613h-17.071l.002 44.613z' />
                  <path className={styles.left_girl} fill='#2f2e41'
                    d='M136.37818 645.39784l22.778-.00093h.00092a14.5157 14.5157 0 0114.51609 14.51587v.47171l-37.29436.00139z' />
                  <path className={styles.left_girl} fill='#a0616a'
                    d='M24.366 633.182l9.938 5.917 27.553-35.517-14.668-8.733-22.823 38.333z' />
                  <path className={styles.left_girl} fill='#2f2e41'
                    d='M23.76293 628.42829l19.57164 11.65289.00079.00047a14.5157 14.5157 0 015.04582 19.89892l-.24134.40531-32.04449-19.07934zM153.62393 633.41662h-12.95169a4.23772 4.23772 0 01-4.22149-3.79676l-13.05719-122.73739a1.41541 1.41541 0 00-2.69716-.433L97.141 558.60819l-41.70358 68.00266a4.26564 4.26564 0 01-5.32891 1.66575l-16.66024-7.33a4.24672 4.24672 0 01-1.93478-6.06413l38.33707-64.19208 11.75766-54.0852c-3.69795-23.455 12.155-58.326 12.31575-58.67614l.07855-.17044 43.66751-17.06765.219.2681c17.22117 56.51377 27.715 117.3322 19.96672 208.5678a4.27417 4.27417 0 01-4.23182 3.88976z' />
                  <path className={styles.left_girl} fill='#3f3d56'
                    d='M92.24326 443.47354l-.20339-.42749c-.09719-.20454-9.807-20.68365-17.292-42.57146a32.28512 32.28512 0 012.23858-25.87344 32.6374 32.6374 0 0120.81263-16.00426 32.677 32.677 0 0137.92775 19.56974c5.93722 14.84708 4.045 30.69452 2.26429 43.15723l-.03547.24967-.22711.10872z' />
                  <path className={styles.left_girl} fill='#2f2e41'
                    d='M129.25961 313.59312H92.46575v-16.03835c8.07584-3.20838 15.97847-5.93693 20.75551 0a16.03844 16.03844 0 0116.03835 16.03833z' />
                  <path className={styles.left_girl} fill='#2f2e41'
                    d='M90.42872 294.72447c-21.99607 0-28.15279 27.57121-28.15279 43.12552 0 8.67446 3.923 11.777 10.08753 12.8268l2.17708-11.611 5.09905 12.11064c1.73162.00864 3.55077-.02488 5.43671-.05989l1.72886-3.55986 3.85527 3.496c15.44087.023 27.92061 2.27382 27.92061-13.20269 0-15.55431-5.39939-43.12552-28.15232-43.12552z' />
                  <path className={styles.female_line} fill='#ccc'
                    d='M193 661.47278H1a1 1 0 110-2h192a1 1 0 010 2z' />
                  <path className={styles.folder} fill='#fff'
                    d='M196.61024 332.47278h-43a9.51081 9.51081 0 01-9.5-9.5v-43a9.51081 9.51081 0 019.5-9.5h43a9.51081 9.51081 0 019.5 9.5v43a9.51081 9.51081 0 01-9.5 9.5z' />
                  <path className={styles.folder} fill='#3f3d56'
                    d='M196.61024 332.47278h-43a9.51081 9.51081 0 01-9.5-9.5v-43a9.51081 9.51081 0 019.5-9.5h43a9.51081 9.51081 0 019.5 9.5v43a9.51081 9.51081 0 01-9.5 9.5zm-43-60a7.50836 7.50836 0 00-7.5 7.5v43a7.50836 7.50836 0 007.5 7.5h43a7.50836 7.50836 0 007.5-7.5v-43a7.50836 7.50836 0 00-7.5-7.5z' />
                  <path className={styles.folder} fill='#6c63ff'
                    d='M189.11024 314.97278h-28a3.00328 3.00328 0 01-3-3v-21a3.00328 3.00328 0 013-3h7.88232a2.98117 2.98117 0 012.55518 1.42724l2.19824 3.57276h15.36426a3.00328 3.00328 0 013 3v16a3.00328 3.00328 0 01-3 3z' />
                  <path className={styles.left_girl} fill='#a0616a'
                    d='M188.19947 325.58193q.20986.38415.38766.79029a10.38021 10.38021 0 01-6.39269 14.10854 9.72022 9.72022 0 01-.98807.24953l-19.09943 49.40482a8.06134 8.06134 0 01-8.16324 5.09887l-.096-.01816-41.39664-12.46211a8.89853 8.89853 0 115.28606-16.99313l29.29033 9.40382 22.6764-40.20175a9.87622 9.87622 0 01-.51127-1.28942 10.38005 10.38005 0 0119.0069-8.0913z' />
                </svg>
              </div>
              <div className={styles.text}>
                <h1 className={styles.main_title} id='main_title'>Expand your business<br />With our services</h1>
                <p>
                  We have helped many business with their online presence.
                  Be part of our growing family.
                  Let us give you the exposure your business deserves!
                                </p>
              </div>
            </div>

            <div className={styles.button_holder} id='button_holder'>
              <div className={styles.button_outline}></div>
              <a href="/contact" className={styles.contact_button}>Contact Us</a>
            </div>
            <ul className={styles.item_list}>
              <li className={styles.item}>
                <section className='_center _column'>
                  <img src='../assets/small_icons/design_icon.svg' alt='design icon' className='_small_icon' />
                  <label className={styles.item_title}>Modern Designs</label>
                  <p className={styles.item_description}>
                    Our designs are unique and tailored to your needs.
                    We do not just follow the latest designing trends.
                    We improve on them!
                                </p>
                </section>
              </li>
              <li className={styles.item}>
                <section className='_center _column'>
                  <img src='../assets/small_icons/browser.svg' alt='browser icon' className='_small_icon' />
                  <label className={styles.item_title}>Cross-Browser Compatible</label>
                  <p className={styles.item_description}>
                    No matter what browser your costumers use,
                    we guarantee that the page will look and feel the same.
                    Consistency and quality is our main goal when designing your website.
                                    </p>
                </section>
              </li>
              <li className={styles.item}>
                <section className='_center _column'>
                  <img src='../assets/small_icons/support.svg' alt='design icon' className='_small_icon' />
                  <label className={styles.item_title}>Long-Term Support</label>
                  <p className={styles.item_description}>
                    We provide continuous support for the websites we build.
                    Providing you with new features and answering all your questions!
                            </p>
                </section>
              </li>
            </ul>
          </div>

        </div>
        <div className={styles.how_div}>
          <img src='../assets/blobs/blob_2.svg' className={styles.second_blob} alt='' />
          <img src='../assets/blobs/blob_3.svg' className={styles.third_blob} alt='' />

          <div className={styles.how_div_content}>
            <div className={styles.explain}>
              <div className={styles.side_line}></div>
              <div className={styles.explain_title}>How it works.</div>
              <p className={styles.explain_text}>
                Its simple! You contact us,
                provide our designers with any media you wish to be included,
                we submit to you a design and upon agreeing in a design we turn it into a fully functioning
                website!
                    </p>
              <img src='../assets/blobs/blob_1.svg' className={styles.first_blob} alt='' />
            </div>

            <div className={styles.work_holder}>
              <div className={styles.work_background}></div>
              <ul className={styles.work_list}>
                <li className={styles.work_item}>
                  <section className='_center _column'>
                    <img src='../assets/illustrations/get_in_touch.svg' alt='get in touch illustration'
                      className='_illustration' />
                    <label className={styles.item_title}>Get in touch.</label>
                    <p className={styles.item_description}>
                      After contacting us we will schedule an interview so we can decide on the specifics
                      of your project.
                                    <br />
                      <br />
                                    A timeline is established and an estimation is made for the time and the cost of the
                                    project.
                                    <br />
                      <br />
                                    After agreeing on the project details our designer will submit some mockups for you
                                    to review and choose from.
                                    <br />
                      <br />
                                    Aditionally, you can provide your own designs for us to work with.
                      </p>
                  </section>
                </li>
                <li className={styles.work_item}>
                  <section className='_center _column'>
                    <img src='../assets/illustrations/provide_content.svg' alt='provide content illustration'
                      className='_illustration' />
                    <label className={styles.item_title}>Provide content.</label>
                    <p className={styles.item_description}>
                      After selecting a design that you like,
                      you will be required to provide any text, images, videos, gifs, etc. that you wish
                      to be included in your website.
                                    <br />
                      <br />
                                    Our developers will review your submitted material and will make sure to fit them in
                                    the chosen design without breaking its look and feel.
                                </p>
                  </section>
                </li>
                <li className={styles.work_item}>
                  <section className='_center _column'>
                    <img src='../assets/illustrations/get_your_website.svg' alt='get your website illustration'
                      className='_illustration' />
                    <label className={styles.item_title}>Get your website.</label>
                    <p className={styles.item_description}>
                      After the website is ready for use,
                      you get to test it before the website goes live.
                      Upon you approval, we host the website for you, in your desired domain!
                      <br />
                      <br />
                      We continue to offer support for your website for 1 year for free!
                    </p>
                  </section>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
