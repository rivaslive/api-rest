import StudentModule from './example.model';

export const getAllExample = async (req, res) => {
  const { offset, limit } = req.params;

  try {
    const query = StudentModule.find().skip(offset).limit(limit);
    const data = await query.exec();
    return res.status(200).toJSON(data);
  } catch (error) {
    throw Error(error);
  }
};
