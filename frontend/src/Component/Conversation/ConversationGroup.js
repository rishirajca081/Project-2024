import React from 'react';

const ConversationGroup = ({ groupdata, onClick }) => {
  return (
    <>
      {groupdata && (
        <div className="follower conversation" onClick={onClick}>
          <div>
            <div className='name' style={{ fontSize: "1.2rem" }}>
              <span>{groupdata.GroupName}</span>
              <br />
            </div>
          </div>
        </div>
      )}
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  );
};

export default ConversationGroup;
