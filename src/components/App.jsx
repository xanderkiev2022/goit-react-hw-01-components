import user from '../user.json';

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>;

export const App = () => {
  return (
    //   <div
    //     style={{
    //       height: '100vh',
    //       display: 'flex',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       fontSize: 40,
    //       color: '#010101'
    //     }}
    //   >
    //     React homework template
    //   </div>

    <>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <UserProfile profile={user} />
    </>
  );
};
