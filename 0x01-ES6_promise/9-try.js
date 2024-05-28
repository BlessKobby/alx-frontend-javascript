// function named guardrail that will accept one argument mathFunction (Function).
export default function guardrail(mathFunction) {
    const queue = [];
    try {
      const result = mathFunction();
      queue.push(result);
    } catch (error) {
      queue.push(`Error: ${error.message}`);
    } finally {
      queue.push('Guardrail was processed');
    }
    return queue;
  }