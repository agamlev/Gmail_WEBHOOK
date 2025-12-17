
const WEBHOOK_URL = "<MAKE_WEBHOOK_URL>";

function checkNewEmails() {
  const props = PropertiesService.getScriptProperties();
  const lastProcessedId = props.getProperty("LAST_PROCESSED_ID");


  const threads = GmailApp.search("is:inbox is:unread newer_than:1m");

  let newestId = lastProcessedId; // save latest we encounter

  threads.forEach(thread => {
    const messages = thread.getMessages();

    messages.forEach(message => {

      const messageId = message.getId();


      if (lastProcessedId && messageId <= lastProcessedId) return;


      if (!message.isUnread()) return;

      const payload = {
        from: message.getFrom(),
        to: message.getTo(),
        subject: message.getSubject(),
        body: message.getPlainBody(),
        date: message.getDate(),
        threadId: thread.getId(),
        messageId: messageId,
      };

      UrlFetchApp.fetch(WEBHOOK_URL, {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify(payload)
      });


      if (!newestId || messageId > newestId) {
        newestId = messageId;
      }
    });
  });


  if (newestId) {
    props.setProperty("LAST_PROCESSED_ID", newestId);
  }
}
