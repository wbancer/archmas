module.exports = async function (context, Message) {
    context.log(`Trying to insert message "${Message}"`);

    const [ date, time ] = context.bindingData.insertionTime.split('T');

    const msg = {
        PartitionKey: date,
        RowKey: context.bindingData.invocationId,
        Message
    };

    context.log(`Trying to save value: ${JSON.stringify(msg)}`);

    context.bindings.Messages = [];
    context.bindings.Messages.push(msg);
};