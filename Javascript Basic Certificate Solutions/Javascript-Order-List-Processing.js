return state === 'Processing' ?
      orderList.map(item => ({
          ...item,
          state: item.id === orderId ? 'Processing' : item.state
      })) :
      orderList.filter(item => item.id !== orderId);
